import React, { useState, useEffect } from 'react';
import { Typography, Avatar } from "@mui/material";


interface Question {
    id: number;
    videoId: number;
    user: string;
    avatar: string;
    timestamp: string;
    content: string;
    replies: Reply[];
}

interface Reply {
    id: number;
    videoId: number;
    user: string;
    avatar: string;
    timestamp: string;
    content: string;
}

interface Note {
    id: number;
    time: string;
    content: string;
}


const Player = () => {
    const playListData = [
        {
            id: 1,
            title: 'Ocean feeding frenzy',
            about: 'Learn complete Python with Basics, Data Science, Data Visualisation, Desktop Graphical Applications and Machine Learning',
            description: 'Are you tired of getting videos and lectures on just python basics and syntaxes or just stuck in college studies and hello world program... (remainder of the text)',
            author: 'Super Mario',
            topicsCovered: [
                'Python for graphical applications.',
                'Tkinter - for building desktop applications and actually user interface.',
                'Turtle graphics - for learning graphical design using python and to learn controlling objects in computer using keyboard.',
            ],
            buildProjects: [
                'Caterpillar game with proper interface and keyboard control.',
                'Smart calculator - Did not need to add symbols just give numbers and ask for any operation.',
                // ... all other projects
            ],
            whatYouLearn: [
                'Complete Python.',
                'Python basics like data-types, loops, decision-makings, file handling, libraries, modules, date-times etc.',
                // ... all other learning outcomes
            ],
            courseRequirements: 'Just will to learn and achieve great things.',
            targetAudience: 'Everyone who want to learn python.',
            duration: 200000,
            sources: [{ src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }],
            watched: false
        },
        {
            id: 2,
            title: 'Big buck bunny short film',
            description: 'Description for Ocean feeding frenzy', // Thêm thuộc tính 'description'
            author: 'Super Mario',
            duration: 300000,
            sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }],
            watched: false
        },
        {
            id: 3,
            title: 'Elephants dream short film',
            author: 'Super Mario',
            description: 'Description for Ocean feeding frenzy', // Thêm thuộc tính 'description'
            duration: 400000,
            sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }],
            watched: false
        },
        {
            id: 4,
            title: 'Chromecast commercial: For bigger blazes',
            author: 'Super Mario',
            duration: 600000,
            sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video/mp4' }],
            watched: false,
            description: 'Description for Ocean feeding frenzy', // Thêm thuộc tính 'description'

        },
        {
            id: 5,
            title: 'Chromecast commercial: For bigger escapes',
            author: 'Super Mario',
            duration: 500000,
            sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', type: 'video/mp4' }],
            watched: false,
            description: 'Description for Ocean feeding frenzy', // Thêm thuộc tính 'description'

        },
        {
            id: 6,
            title: 'Chromecast commercial: For bigger fun',
            author: 'Super Mario',
            duration: 200000,
            sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', type: 'video/mp4' }],
            watched: false,
            description: 'Description for Ocean feeding frenzy', // Thêm thuộc tính 'description'

        },
        {
            id: 7,
            title: 'Chromecast commercial: For bigger joy rides',
            author: 'Super Mario',
            duration: 700000,
            sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video/mp4' }],
            watched: false,
            description: 'Description for Ocean feeding frenzy', // Thêm thuộc tính 'description'

        },
    ];

    const qaData: Question[] = [
        {
            id: 1,
            user: "Alice",
            videoId: 2,
            avatar: "path/to/avatar1.jpg",
            timestamp: "March 25, 2024",
            content: "What's the prerequisite knowledge needed for this course?",
            replies: [
                {
                    id: 101,
                    videoId: 2,
                    user: "Bob",
                    avatar: "path/to/avatar101.jpg",
                    timestamp: "March 26, 2024",
                    content: "This course assumes basic understanding of programming concepts and Python syntax.",
                },
            ],

        },
        {
            id: 2,
            videoId: 1,
            user: "Charlie",
            avatar: "path/to/avatar2.jpg",
            timestamp: "March 26, 2024",
            content: "How can I access the course materials?",

            replies: [
                {
                    id: 201,
                    videoId: 1,
                    user: "David",
                    avatar: "path/to/avatar201.jpg",
                    timestamp: "March 26, 2024",
                    content: "You can access the course materials through the provided links in the course description.",
                },
                // Add more replies if needed
            ]
        },

        // Add more questions if needed
    ];

    const [playList, setPlayList] = useState(playListData);
    const [currentPlayingIndex, setCurrentPlayingIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [openReplies, setOpenReplies] = useState<number[]>([]);
    const [currentTime, setCurrentTime] = useState(0); // State để lưu thời gian hiện tại của video
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [noteContent, setNoteContent] = useState('');
    const [sortBy, setSortBy] = useState<string>('most-recent');
    const [notes, setNotes] = useState<Note[]>([]);
    const [editNoteId, setEditNoteId] = useState<number | null>(null);
    const [editedContent, setEditedContent] = useState<string>('');

    const changeTab = (tabName: any) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        const video = playList[currentPlayingIndex];
        if (autoPlay && video) {
            const timeoutId = setTimeout(() => {
                const nextIndex = (currentPlayingIndex + 1) % playList.length;
                setCurrentPlayingIndex(nextIndex);
            }, video.duration);
            return () => clearTimeout(timeoutId);
        }
    }, [autoPlay, currentPlayingIndex, playList]);

    const handleVideoSelect = (id: number, index: number) => {
        setCurrentPlayingIndex(index);
    };

    const handleAutoPlayChange = () => {
        setAutoPlay(!autoPlay);
    };

    const handleVideoEnd = () => {
        const nextIndex = (currentPlayingIndex + 1) % playList.length;
        const updatedPlayList = playList.map((video, index) => {
            if (index === currentPlayingIndex) {
                return { ...video, watched: true };
            }
            return video;
        });
        setPlayList(updatedPlayList);

        if (autoPlay) {
            setCurrentPlayingIndex(nextIndex);
        }
    };


    const handleReply = (questionId: number) => {
        setOpenReplies(prevOpenReplies => {
            if (prevOpenReplies.includes(questionId)) {
                return prevOpenReplies.filter(id => id !== questionId);
            } else {
                return [...prevOpenReplies, questionId];
            }
        });
    };

    const handleVideoTimeUpdate = (event: any) => {
        setCurrentTime(event.target.currentTime);
    };

    const handleVideoClick = (event: any) => {
        const rect = event.target.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const width = rect.width;
        const duration = playList[currentPlayingIndex].duration / 1000; // Chuyển đổi thời gian sang giây
        const seekTime = (duration * offsetX) / width;
        event.target.currentTime = seekTime; // Thiết lập thời gian hiện tại của video tới vị trí người dùng bấm chuột
        setCurrentTime(seekTime);
    };
    // Add note
    const handleAddNote = () => {
        setShowNoteInput(true);
    };

    // Cancel note
    const handleCancelNote = () => {
        setShowNoteInput(false);
        setNoteContent('');
    };
    // Select sort by 
    const handleChangeSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    const handleSaveNote = () => {
        if (noteContent.trim()) {
            const newNote: Note = {
                id: Date.now(), // Use the current timestamp as a simple unique ID
                time: currentTime.toFixed(2),
                content: noteContent
            };
            setNotes([...notes, newNote]);
            setShowNoteInput(false);
            setNoteContent('');
        } else {
            alert('Please enter some content for the note.');
        }
    };

    // Function to start editing a note
    const handleEditNote = (noteId: number) => {
        const noteToEdit = notes.find(note => note.id === noteId);
        if (noteToEdit) {
            setEditNoteId(noteId);
            setEditedContent(noteToEdit.content);
            setShowNoteInput(true); // Show the edit input
        }
    };

    // Function to update a note after editing
    const handleUpdateNote = () => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === editNoteId ? { ...note, content: editedContent } : note
            )
        );
        setEditNoteId(null); // Reset editing state
        setShowNoteInput(false); // Hide the edit input
    };

    // Function to handle note deletion
    const handleDeleteNote = (noteId: number) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
    };

    return (
        <div className='video-player-page'>
            <div className="flex h-screen">
                {/* Player UI */}
                <div className="w-3/4 flex flex-col">
                    <div className="player-container bg-white text-black flex-grow">
                        {/* Video Player */}
                        <div className="video-player">
                            {/* Your video player component goes here */}
                            {playList[currentPlayingIndex] && (
                                <div style={{ position: 'relative' }} className="h-full">
                                    <video
                                        controls
                                        autoPlay={autoPlay}
                                        src={playList[currentPlayingIndex].sources[0].src}
                                        className="w-full h-full"
                                        onEnded={handleVideoEnd}

                                        onTimeUpdate={handleVideoTimeUpdate} // Thêm sự kiện onTimeUpdate để xử lý thời gian của video thay đổi
                                        onClick={handleVideoClick} // Thêm sự kiện onClick để xử lý 
                                    />
                                </div>
                            )}
                        </div>

                        {/* Tabs for additional content below video player */}
                        <div className="tabs flex justify-start border-b font-bold">
                            <button onClick={() => changeTab('overview')} className={`tab py-2 px-4 ${activeTab === 'overview' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-100'}`}>Overview</button>
                            <button onClick={() => changeTab('QA')} className={`tab py-2 px-4 ${activeTab === 'QA' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-100'}`}>Q&A</button>
                            {/* <button onClick={() => changeTab('comments')} className={`tab py-2 px-4 ${activeTab === 'comments' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-100'}`}>Comments</button> */}
                            <button onClick={() => changeTab('notes')} className={`tab py-2 px-4 ${activeTab === 'notes' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-100'}`}>Notes</button>
                        </div>
                        {activeTab === 'overview' && (
                            <div className="video-info mt-2 p-4 text-left">
                                {/* About this course */}
                                <div className="mb-6 border-b border-gray-300 pb-6">
                                    <h2 className="text-lg font-semibold mb-4">About this course</h2>
                                    <p className="text-gray-700">{playList[currentPlayingIndex].about}</p>
                                </div>
                                {/* Description */}
                                <div className="mb-6 border-b border-gray-300 pb-6">
                                    <h2 className="text-lg font-semibold mb-4">Description</h2>
                                    <p className="text-gray-700">{playList[currentPlayingIndex].description}</p>
                                </div>
                                {/* Instructor Information */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Instructor</h2>
                                    <div className="flex items-center">
                                        {/* Instructor Icon */}
                                        <div className="mr-4">
                                            <img src="instructor_icon_url" alt="Instructor" className="w-12 h-12 rounded-full" />
                                        </div>
                                        {/* Instructor Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold">{playList[currentPlayingIndex].author}</h3>
                                            {/* Additional Instructor Details if available */}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}
                        {activeTab === 'QA' && (
                            <div className="tab-details mt-2 p-4">
                                <h2 className="text-lg font-semibold mb-4 text-left">Question and Answer</h2>

                                {qaData.map(question => (
                                    <div key={question.id} style={{ marginBottom: '10px', padding: '10px' }}>
                                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                                            <Avatar alt={question.user} src={question.avatar} style={{ marginRight: '20px' }} />
                                            <div>
                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold', textAlign: 'left' }}>{question.user}</Typography>
                                                <Typography variant="body2" style={{ color: '#888', fontSize: '0.8rem', textAlign: 'left' }}>{question.timestamp}</Typography>
                                                <Typography variant="body1" style={{ marginBottom: '10px' }}>{question.content}</Typography>
                                                <div style={{ display: 'flex', alignItems: 'center', color: '#888' }}>
                                                    <div style={{ marginRight: '5px' }}> Lecture {question.videoId}</div> {/* Hiển thị số lượng like từ dữ liệu tĩnh */}
                                                    <button onClick={() => handleReply(question.id)}>Reply</button> {/* Nút Reply */}
                                                </div>

                                            </div>
                                        </div>
                                        {/* Replies */}
                                        {openReplies.includes(question.id) && question.replies.map(reply => (
                                            <div key={reply.id} style={{ borderLeft: '1px solid #ccc', paddingLeft: '10px', marginLeft: '20px', marginBottom: '10px' }}>
                                                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                                                    <Avatar alt={reply.user} src={reply.avatar} style={{ marginRight: '20px' }} />
                                                    <div>
                                                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', textAlign: 'left' }}>{reply.user}</Typography>
                                                        <Typography variant="body2" style={{ color: '#888', fontSize: '0.8rem', textAlign: 'left' }}>{reply.timestamp}</Typography>
                                                        <Typography variant="body1" style={{ marginBottom: '10px' }}>{reply.content}</Typography>
                                                        <div style={{ display: 'flex', alignItems: 'center', color: '#888' }}>
                                                            <div style={{ marginRight: '5px' }}>Lecture {reply.videoId} </div>
                                                            <button onClick={() => handleReply(reply.id)}>Reply</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'notes' && (
                            <div className="tab-comments mt-2 p-4">
                                <div className="flex items-center justify-between border p-4 mb-4">
                                    <span>Create a new note at {currentTime.toFixed(2)} seconds</span>
                                    <button onClick={handleAddNote} className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        <i className="fas fa-plus"></i> Add
                                    </button>
                                </div>
                                {showNoteInput && (
                                    <div className="border p-4 mb-7">
                                        <textarea
                                            value={noteContent}
                                            onChange={(e) => setNoteContent(e.target.value)}
                                            placeholder="Enter your note here..."
                                            rows={4}
                                            className="w-full p-2 border border-gray-300"
                                        ></textarea>
                                        <div className="flex justify-end space-x-2 mt-2">
                                            <button
                                                type="button"
                                                onClick={handleSaveNote}
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCancelNote}
                                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <div className="border p-4">
                                    <select
                                        id="sort-select"
                                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                        value={sortBy}
                                        onChange={(event) => setSortBy(event.target.value)}
                                    >
                                        <option value="most-recent">Sort by most recent</option>
                                        <option value="oldest">Sort by oldest</option>
                                    </select>
                                </div>

                                {/* Section to display saved notes */}
                                <div className="space-y-2 mt-7">
                                    {notes.map(note => (
                                        <div key={note.id} className="border p-4 flex justify-between items-center">
                                            <span className="text-gray-700">At {note.time} seconds:</span>
                                            <div className="flex-grow">
                                                <span className="text-gray-900">{note.content}</span>
                                            </div>
                                            <button onClick={() => handleEditNote(note.id)} className="text-blue-600 hover:text-blue-800 mx-2">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDeleteNote(note.id)} className="text-red-600 hover:text-red-800 mx-2">
                                                Delete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                    </div>
                </div>

            </div>

            {/* // Playlist UI */}
            <div className="fixed top-0 right-0 bottom-0 w-1/4 bg-gray-200 p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Playlist</h3>
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={autoPlay}
                                onChange={handleAutoPlayChange}
                            />
                            <div className={`w-10 h-4 ${autoPlay ? 'bg-green-500' : 'bg-gray-400'} rounded-full shadow-inner transition-colors`}></div>
                            <div
                                className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transform transition-transform ${autoPlay ? 'translate-x-full' : 'translate-x-0'}`}
                            ></div>
                        </div>

                        <div className="ml-3 text-gray-700 font-medium">Autoplay</div>
                    </label>
                </div>
                <div className="playlist">
                    {playList.map((video, index) => (
                        <div
                            key={video.id}
                            className={`playlist-item p-4 cursor-pointer border-b border-gray-300 ${playList[currentPlayingIndex] && playList[currentPlayingIndex].id === video.id ? 'bg-gray-300' : ''
                                }`}
                            onClick={() => handleVideoSelect(video.id, index)}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-600 text-left mt-2">{index + 1}. {video.title}</p>
                                    <p className="text-xs text-gray-400 text-left mt-2">{video.duration} - {video.author}</p>
                                </div>
                                {video.watched && (
                                    <div className="bg-green-500 rounded-full p-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Player;
