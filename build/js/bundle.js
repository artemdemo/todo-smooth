webpackJsonp([0],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(667);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TriptychGrid = function TriptychGrid(props) {
    var className = props.className;

    var gridClass = (0, _classnames2.default)(className, {
        'triptych-grid': true
    });
    return _react2.default.createElement(
        'div',
        { className: gridClass },
        props.children
    );
};

TriptychGrid.propTypes = {
    className: _propTypes2.default.string
};

TriptychGrid.defaultProps = {
    className: ''
};

exports.default = TriptychGrid;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(668);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TriptychGridItem = function TriptychGridItem(props) {
    var padded = props.padded,
        centered = props.centered,
        className = props.className;

    var itemClass = (0, _classnames2.default)(className, {
        'triptych-grid-item': true,
        'triptych-grid-item_padded': padded,
        'triptych-grid-item_centered': centered
    });
    return _react2.default.createElement(
        'div',
        { className: itemClass },
        props.children
    );
};

TriptychGridItem.propTypes = {
    padded: _propTypes2.default.bool,
    centered: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

TriptychGridItem.defaultProps = {
    padded: false,
    centered: false,
    className: ''
};

exports.default = TriptychGridItem;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_CURRENT_PROJECT_ID = exports.SET_CURRENT_PROJECT_ID = Symbol('SET_CURRENT_PROJECT_ID');
var SET_CURRENT_PROJECT_RECT = exports.SET_CURRENT_PROJECT_RECT = Symbol('SET_CURRENT_PROJECT_RECT');
var TOGGLE_PROJECT_MODAL = exports.TOGGLE_PROJECT_MODAL = Symbol('TOGGLE_PROJECT_MODAL');

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_CURRENT_TASK_ID = exports.SET_CURRENT_TASK_ID = Symbol('SET_CURRENT_TASK_ID');
var TOGGLE_TASK_MODAL = exports.TOGGLE_TASK_MODAL = Symbol('TOGGLE_TASK_MODAL');
var UPDATE_TASK_NAME = exports.UPDATE_TASK_NAME = Symbol('UPDATE_TASK_NAME');
var SET_TASK_NAME_ERROR = exports.SET_TASK_NAME_ERROR = Symbol('SET_TASK_NAME_ERROR');

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REMOVE_TASK_FROM_PROJECT = exports.REMOVE_TASK_FROM_PROJECT = Symbol('REMOVE_TASK_FROM_PROJECT');
var ADD_TASK_TO_PROJECT = exports.ADD_TASK_TO_PROJECT = Symbol('ADD_TASK_TO_PROJECT');

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOGGLE_DONE = exports.TOGGLE_DONE = Symbol('TOGGLE_DONE');
var DELETE_TASK = exports.DELETE_TASK = Symbol('DELETE_TASK');
var ADD_TASK = exports.ADD_TASK = Symbol('ADD_TASK');

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _PercentBar = __webpack_require__(672);

var _PercentBar2 = _interopRequireDefault(_PercentBar);

var _ProjectIcon = __webpack_require__(675);

var _ProjectIcon2 = _interopRequireDefault(_ProjectIcon);

var _ProjectTitle = __webpack_require__(677);

var _ProjectTitle2 = _interopRequireDefault(_ProjectTitle);

__webpack_require__(679);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectHeader = function (_React$Component) {
    (0, _inherits3.default)(ProjectHeader, _React$Component);

    function ProjectHeader(props) {
        (0, _classCallCheck3.default)(this, ProjectHeader);
        return (0, _possibleConstructorReturn3.default)(this, (ProjectHeader.__proto__ || Object.getPrototypeOf(ProjectHeader)).call(this, props));
    }

    (0, _createClass3.default)(ProjectHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                tasksAmount = _props.tasksAmount,
                percentDone = _props.percentDone,
                color = _props.color,
                icon = _props.icon,
                open = _props.open;

            var iconClass = (0, _classnames2.default)({
                'project-header-icon': true,
                'project-header-icon_open': open
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: iconClass },
                    _react2.default.createElement(_ProjectIcon2.default, {
                        color: color,
                        icon: icon
                    })
                ),
                _react2.default.createElement(
                    _ProjectTitle2.default,
                    { tasksAmount: tasksAmount },
                    name
                ),
                _react2.default.createElement(_PercentBar2.default, {
                    color: color,
                    percentAmount: percentDone
                })
            );
        }
    }]);
    return ProjectHeader;
}(_react2.default.Component);

ProjectHeader.propTypes = {
    name: _propTypes2.default.string,
    tasksAmount: _propTypes2.default.number,
    percentDone: _propTypes2.default.number,
    color: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    open: _propTypes2.default.bool
};

ProjectHeader.defaultProps = {
    name: '',
    tasksAmount: 0,
    percentDone: 0,
    color: null,
    icon: null,
    open: false
};

exports.default = ProjectHeader;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCurrentTaskId = setCurrentTaskId;
exports.updateTaskName = updateTaskName;
exports.toggleTaskModal = toggleTaskModal;
exports.setTaskNameError = setTaskNameError;

var _currentTaskConst = __webpack_require__(204);

var currentTaskConst = _interopRequireWildcard(_currentTaskConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setCurrentTaskId(taskId) {
    return {
        type: currentTaskConst.SET_CURRENT_TASK_ID,
        taskId: taskId
    };
}

function updateTaskName(name) {
    return {
        type: currentTaskConst.UPDATE_TASK_NAME,
        name: name
    };
}

function toggleTaskModal(open) {
    return {
        type: currentTaskConst.TOGGLE_TASK_MODAL,
        open: open
    };
}

function setTaskNameError() {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return {
        type: currentTaskConst.SET_TASK_NAME_ERROR,
        error: error
    };
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleTaskDone = toggleTaskDone;
exports.deleteTask = deleteTask;
exports.addTask = addTask;

var _tasksConst = __webpack_require__(210);

var taskConst = _interopRequireWildcard(_tasksConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function toggleTaskDone(id) {
    return {
        type: taskConst.TOGGLE_DONE,
        id: id
    };
}

function deleteTask(id) {
    return {
        type: taskConst.DELETE_TASK,
        id: id
    };
}

function addTask(id, name) {
    return {
        type: taskConst.ADD_TASK,
        id: id,
        name: name
    };
}

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeTaskFromProject = removeTaskFromProject;
exports.addTaskToProject = addTaskToProject;

var _projectsConst = __webpack_require__(209);

var projectConst = _interopRequireWildcard(_projectsConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function removeTaskFromProject(projectId, taskId) {
    return {
        type: projectConst.REMOVE_TASK_FROM_PROJECT,
        projectId: projectId,
        taskId: taskId
    };
}

function addTaskToProject(projectId, taskId) {
    return {
        type: projectConst.ADD_TASK_TO_PROJECT,
        projectId: projectId,
        taskId: taskId
    };
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(347);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(554);

var _reactRedux = __webpack_require__(55);

var _store = __webpack_require__(594);

var _store2 = _interopRequireDefault(_store);

var _AppView = __webpack_require__(622);

var _AppView2 = _interopRequireDefault(_AppView);

var _MainView = __webpack_require__(655);

var _MainView2 = _interopRequireDefault(_MainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _AppView2.default,
        null,
        _react2.default.createElement(_MainView2.default, null)
    )
), document.getElementById('app'));

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(190);

var _reducers = __webpack_require__(595);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)(_reducers2.default);

var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)());

exports.default = store;

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _currentProjectReducer = __webpack_require__(596);

var _currentProjectReducer2 = _interopRequireDefault(_currentProjectReducer);

var _currentTaskReducer = __webpack_require__(604);

var _currentTaskReducer2 = _interopRequireDefault(_currentTaskReducer);

var _projectsReducer = __webpack_require__(605);

var _projectsReducer2 = _interopRequireDefault(_projectsReducer);

var _tasksReducer = __webpack_require__(620);

var _tasksReducer2 = _interopRequireDefault(_tasksReducer);

var _userReducer = __webpack_require__(621);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    currentProject: _currentProjectReducer2.default,
    currentTask: _currentTaskReducer2.default,
    projects: _projectsReducer2.default,
    tasks: _tasksReducer2.default,
    user: _userReducer2.default
};

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(90);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case currentProjectConst.SET_CURRENT_PROJECT_ID:
            return (0, _extends3.default)({}, state, {
                projectId: action.projectId
            });
        case currentProjectConst.SET_CURRENT_PROJECT_RECT:
            var _action$rect = action.rect,
                top = _action$rect.top,
                right = _action$rect.right,
                bottom = _action$rect.bottom,
                left = _action$rect.left,
                width = _action$rect.width,
                height = _action$rect.height,
                x = _action$rect.x,
                y = _action$rect.y;

            return (0, _extends3.default)({}, state, {
                rect: { top: top, right: right, bottom: bottom, left: left, width: width, height: height, x: x, y: y }
            });
        case currentProjectConst.TOGGLE_PROJECT_MODAL:

            return (0, _extends3.default)({}, state, {
                open: action.open !== undefined ? action.open : !state.open
            });
        default:
            return state;
    }
};

var _currentProjectConst = __webpack_require__(203);

var currentProjectConst = _interopRequireWildcard(_currentProjectConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
    projectId: null,
    rect: {},
    open: false
};

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(90);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case currentTaskConst.SET_CURRENT_TASK_ID:
            return (0, _extends3.default)({}, state, {
                taskId: action.taskId
            });
        case currentTaskConst.TOGGLE_TASK_MODAL:
            return (0, _extends3.default)({}, state, {
                open: action.open !== undefined ? action.open : !state.open
            });
        case currentTaskConst.UPDATE_TASK_NAME:
            return (0, _extends3.default)({}, state, {
                name: action.name,
                nameError: false
            });
        case currentTaskConst.SET_TASK_NAME_ERROR:
            return (0, _extends3.default)({}, state, {
                nameError: action.error !== false
            });
        default:
            return state;
    }
};

var _currentTaskConst = __webpack_require__(204);

var currentTaskConst = _interopRequireWildcard(_currentTaskConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
    taskId: null,
    rect: {},
    open: false,
    name: '',
    nameError: false
};

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(205);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(90);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = projectReducer;

var _projectsConst = __webpack_require__(209);

var projectConst = _interopRequireWildcard(_projectsConst);

var _reselect = __webpack_require__(73);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
    data: [{
        id: '0',
        name: 'Work',
        color: '#526aff',
        icon: 'briefcase',
        tasks: ['0', '1', '2', '3', '4', '5']
    }, {
        id: '1',
        name: 'Personal',
        color: '#ff7a43',
        icon: 'users',
        tasks: ['6', '7', '8', '9', '10']
    }, {
        id: '2',
        name: 'Vacation',
        color: '#3bcb3e',
        icon: 'sun-o',
        tasks: []
    }]
};

var getProject = function getProject(projects, projectId) {
    var projectIndex = null;
    var project = projects.find(function (project, index) {
        if (project.id === projectId) {
            projectIndex = index;
            return true;
        }
        return false;
    });
    return {
        index: projectIndex,
        project: project
    };
};

function projectReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case projectConst.REMOVE_TASK_FROM_PROJECT:
            var removeData = getProject(state.data, action.projectId);
            if (removeData.project) {
                var tasks = removeData.project.tasks.filter(function (taskId) {
                    return taskId !== action.taskId;
                });
                return (0, _extends3.default)({}, state, {
                    data: [].concat((0, _toConsumableArray3.default)(state.data.slice(0, removeData.index)), [(0, _extends3.default)({}, removeData.project, {
                        tasks: tasks
                    })], (0, _toConsumableArray3.default)(state.data.slice(removeData.index + 1)))
                });
            }
            return state;
        case projectConst.ADD_TASK_TO_PROJECT:
            var addData = getProject(state.data, action.projectId);
            if (addData.project) {
                var _tasks = [action.taskId].concat((0, _toConsumableArray3.default)(addData.project.tasks));
                return (0, _extends3.default)({}, state, {
                    data: [].concat((0, _toConsumableArray3.default)(state.data.slice(0, addData.index)), [(0, _extends3.default)({}, addData.project, {
                        tasks: _tasks
                    })], (0, _toConsumableArray3.default)(state.data.slice(addData.index + 1)))
                });
            }
            return state;
        default:
            return state;
    }
};

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(205);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(90);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = tasksReducer;

var _tasksConst = __webpack_require__(210);

var tasksConst = _interopRequireWildcard(_tasksConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
    data: [{ id: '0', name: 'Design Sprint', done: false }, { id: '1', name: 'Icon set design for mobile app', done: false }, { id: '2', name: 'HTML/CSS study', done: false }, { id: '3', name: 'Weekly report', done: false }, { id: '4', name: 'Prototyping', done: true }, { id: '5', name: 'UX Conference', done: true }, { id: '6', name: 'Buy milk', done: false }, { id: '7', name: 'Walk dog', done: false }, { id: '8', name: 'Buy tickets for tomorrow flight to France', done: false }, { id: '9', name: 'Call mom', done: false }, { id: '10', name: 'Find new apartment', done: true }]
};

function tasksReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case tasksConst.TOGGLE_DONE:
            return (0, _extends3.default)({}, state, {
                data: state.data.map(function (task) {
                    if (task.id === action.id) {
                        return (0, _extends3.default)({}, task, { done: !task.done });
                    }
                    return task;
                })
            });
        case tasksConst.DELETE_TASK:
            return (0, _extends3.default)({}, state, {
                data: state.data.filter(function (task) {
                    return task.id !== action.id;
                })
            });
        case tasksConst.ADD_TASK:
            return (0, _extends3.default)({}, state, {
                data: [].concat((0, _toConsumableArray3.default)(state.data), [{
                    id: action.id,
                    name: action.name
                }])
            });
        default:
            return state;
    }
};

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = userReducer;
var initState = {
    data: {
        name: 'Art'
    }
};

function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        default:
            return state;
    }
};

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(648);

var _color2 = _interopRequireDefault(_color);

var _reactRedux = __webpack_require__(55);

var _reselect = __webpack_require__(73);

__webpack_require__(654);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectSelector = (0, _reselect.createSelector)(function (props) {
    return props.projects;
}, function (props) {
    return props.currentProject;
}, function (projects, currentProject) {
    if (currentProject.projectId !== null) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = projects.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var project = _step.value;

                if (project.id === currentProject.projectId) {
                    return project;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return null;
});

var AppView = function (_React$Component) {
    (0, _inherits3.default)(AppView, _React$Component);

    function AppView() {
        (0, _classCallCheck3.default)(this, AppView);
        return (0, _possibleConstructorReturn3.default)(this, (AppView.__proto__ || Object.getPrototypeOf(AppView)).apply(this, arguments));
    }

    (0, _createClass3.default)(AppView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.currentProject !== nextProps.currentProject) {
                var project = projectSelector(nextProps);
                var color = (0, _color2.default)(project.color);
                document.body.style.backgroundColor = project ? color.lighten(0.1).hex() : null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.children
            );
        }
    }]);
    return AppView;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        projects: state.projects,
        currentProject: state.currentProject
    };
})(AppView);

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(55);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _Swiper = __webpack_require__(657);

var _Swiper2 = _interopRequireDefault(_Swiper);

var _MainMenu = __webpack_require__(664);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _UserGreeting = __webpack_require__(670);

var _UserGreeting2 = _interopRequireDefault(_UserGreeting);

var _ProjectHeader = __webpack_require__(342);

var _ProjectHeader2 = _interopRequireDefault(_ProjectHeader);

var _Modal = __webpack_require__(680);

var _Modal2 = _interopRequireDefault(_Modal);

var _currentProjectActions = __webpack_require__(684);

var _currentTaskActions = __webpack_require__(343);

var _taskActions = __webpack_require__(344);

var _projectActions = __webpack_require__(345);

var _Project = __webpack_require__(685);

var _Project2 = _interopRequireDefault(_Project);

var _Task = __webpack_require__(692);

var _Task2 = _interopRequireDefault(_Task);

var _AddTaskBtn = __webpack_require__(696);

var _AddTaskBtn2 = _interopRequireDefault(_AddTaskBtn);

var _id = __webpack_require__(698);

__webpack_require__(699);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainView = function (_React$Component) {
    (0, _inherits3.default)(MainView, _React$Component);

    function MainView(props) {
        (0, _classCallCheck3.default)(this, MainView);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, props));

        _this.state = {
            project: {}
        };
        return _this;
    }

    (0, _createClass3.default)(MainView, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var projects = this.props.projects;

            if (projects.data.length > 0) {
                this.projectChanged(0);
            }
        }
    }, {
        key: 'projectChanged',
        value: function projectChanged(listId) {
            var _props = this.props,
                projects = _props.projects,
                setCurrentProjectId = _props.setCurrentProjectId;

            var project = projects.data[listId];
            if (project) {
                setCurrentProjectId(project.id);
            }
        }
    }, {
        key: 'openProjectModal',
        value: function openProjectModal(listId, projectEl) {
            var _props2 = this.props,
                projects = _props2.projects,
                setCurrentProjectRect = _props2.setCurrentProjectRect,
                toggleProjectModal = _props2.toggleProjectModal;

            setCurrentProjectRect(projectEl.getBoundingClientRect());
            this.setState({
                project: projects.data[listId]
            }, function () {
                toggleProjectModal();
            });
        }
    }, {
        key: 'closeProjectModal',
        value: function closeProjectModal() {
            var toggleProjectModal = this.props.toggleProjectModal;

            toggleProjectModal(false);
        }
    }, {
        key: 'openSaveTask',
        value: function openSaveTask() {
            var _props3 = this.props,
                toggleTaskModal = _props3.toggleTaskModal,
                currentTask = _props3.currentTask,
                currentProject = _props3.currentProject,
                addTask = _props3.addTask,
                addTaskToProject = _props3.addTaskToProject,
                setTaskNameError = _props3.setTaskNameError,
                updateTaskName = _props3.updateTaskName;

            if (currentTask.name !== '') {
                var taskId = (0, _id.generateId)();
                addTask(taskId, currentTask.name);
                addTaskToProject(currentProject.projectId, taskId);
                toggleTaskModal(false);
                setTaskNameError(false);
                updateTaskName('');
            } else if (currentTask.open && currentTask.name === '') {
                setTaskNameError(true);
            } else {
                toggleTaskModal(true);
            }
        }
    }, {
        key: 'closeTask',
        value: function closeTask() {
            var _props4 = this.props,
                toggleTaskModal = _props4.toggleTaskModal,
                updateTaskName = _props4.updateTaskName;

            toggleTaskModal(false);
            updateTaskName('');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props5 = this.props,
                user = _props5.user,
                projects = _props5.projects,
                tasks = _props5.tasks,
                currentProject = _props5.currentProject,
                currentTask = _props5.currentTask;

            var today = (0, _moment2.default)();
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_MainMenu2.default, null),
                _react2.default.createElement(_UserGreeting2.default, { user: user.data }),
                _react2.default.createElement(
                    'div',
                    { className: 'main-view-projects' },
                    _react2.default.createElement(
                        'div',
                        { className: 'main-view-projects__date' },
                        'Today: ',
                        today.format('MMMM, DD YYYY')
                    ),
                    _react2.default.createElement(
                        _Swiper2.default,
                        {
                            onChange: this.projectChanged.bind(this),
                            onClick: this.openProjectModal.bind(this)
                        },
                        projects.data.map(function (project, index) {
                            var doneAmount = tasks.data.reduce(function (acc, task) {
                                if (project.tasks.includes(task.id) && task.done) {
                                    return acc + 1;
                                }
                                return acc;
                            }, 0);
                            var percentDone = project.tasks.length === 0 ? 0 : doneAmount / project.tasks.length;
                            return _react2.default.createElement(_ProjectHeader2.default, {
                                tasksAmount: project.tasks.length - doneAmount,
                                color: project.color,
                                name: project.name,
                                percentDone: percentDone,
                                icon: project.icon,
                                key: 'main-view-swiper-item-' + index
                            });
                        })
                    )
                ),
                _react2.default.createElement(
                    _Modal2.default,
                    {
                        rect: currentProject.rect,
                        open: currentProject.open,
                        buttons: {
                            left: {
                                icon: 'arrow-left',
                                onClick: this.closeProjectModal.bind(this)
                            },
                            right: {
                                icon: 'ellipsis-v',
                                onClick: null
                            }
                        }
                    },
                    _react2.default.createElement(_Project2.default, null)
                ),
                _react2.default.createElement(
                    _Modal2.default,
                    {
                        rect: {
                            top: '100%',
                            left: '0',
                            width: '100%',
                            height: '1px'
                        },
                        open: currentTask.open,
                        caption: 'New Task',
                        buttons: {
                            left: {
                                icon: 'times',
                                onClick: this.closeTask.bind(this)
                            },
                            right: {
                                icon: null,
                                onClick: null
                            }
                        }
                    },
                    _react2.default.createElement(_Task2.default, null)
                ),
                _react2.default.createElement(_AddTaskBtn2.default, {
                    onClick: this.openSaveTask.bind(this),
                    isSaving: currentTask.open,
                    open: currentProject.open
                })
            );
        }
    }]);
    return MainView;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        currentProject: state.currentProject,
        currentTask: state.currentTask,
        projects: state.projects,
        tasks: state.tasks,
        user: state.user
    };
}, {
    setCurrentProjectId: _currentProjectActions.setCurrentProjectId,
    setCurrentProjectRect: _currentProjectActions.setCurrentProjectRect,
    toggleProjectModal: _currentProjectActions.toggleProjectModal,
    toggleTaskModal: _currentTaskActions.toggleTaskModal,
    updateTaskName: _currentTaskActions.updateTaskName,
    setTaskNameError: _currentTaskActions.setTaskNameError,
    addTask: _taskActions.addTask,
    addTaskToProject: _projectActions.addTaskToProject
})(MainView);

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _swiper = __webpack_require__(658);

var _swiper2 = _interopRequireDefault(_swiper);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(661);

var _Card2 = _interopRequireDefault(_Card);

__webpack_require__(663);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swiper = function (_React$Component) {
    (0, _inherits3.default)(Swiper, _React$Component);

    function Swiper(props) {
        (0, _classCallCheck3.default)(this, Swiper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, props));

        _this.state = {
            showOverflow: false
        };
        _this.swiperEl = null;
        _this.swiper = null;
        return _this;
    }

    (0, _createClass3.default)(Swiper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.swiper = new _swiper2.default(this.swiperEl, {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30
            });

            setTimeout(function () {
                return _this2.setState({
                    showOverflow: true
                });
            }, 50);
        }
    }, {
        key: 'getRef',
        value: function getRef(el) {
            this.swiperEl = el;
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd() {
            var _this3 = this;

            var onChange = this.props.onChange;

            setTimeout(function () {
                onChange && onChange(_this3.swiper.activeIndex);
            }, 50);
        }
    }, {
        key: 'projectClick',
        value: function projectClick() {
            var onClick = this.props.onClick;

            onClick && onClick(this.swiper.activeIndex, this.swiper.slides[this.swiper.activeIndex]);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var swiperClass = (0, _classnames2.default)({
                'swiper-container': true,
                'swiper-container_show-overflow': this.state.showOverflow
            });
            return _react2.default.createElement(
                'div',
                {
                    ref: this.getRef.bind(this),
                    className: swiperClass,
                    onTouchEnd: this.touchEnd.bind(this),
                    onMouseUp: this.touchEnd.bind(this)
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'swiper-wrapper'
                    },
                    this.props.children.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            {
                                className: 'swiper-slide',
                                onClick: _this4.projectClick.bind(_this4),
                                key: 'swiper-item-' + index
                            },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                item
                            )
                        );
                    })
                )
            );
        }
    }]);
    return Swiper;
}(_react2.default.Component);

Swiper.propTypes = {
    onChange: _propTypes2.default.func,
    onClick: _propTypes2.default.func
};

Swiper.defaultProps = {
    onChange: null,
    onClick: null
};

exports.default = Swiper;

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(662);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
    return _react2.default.createElement(
        'div',
        { className: 'card' },
        props.children
    );
};

exports.default = Card;

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(94);

var _Icon2 = _interopRequireDefault(_Icon);

var _TriptychGrid = __webpack_require__(143);

var _TriptychGrid2 = _interopRequireDefault(_TriptychGrid);

var _TriptychGridItem = __webpack_require__(144);

var _TriptychGridItem2 = _interopRequireDefault(_TriptychGridItem);

__webpack_require__(669);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainMenu = function MainMenu() {
    return _react2.default.createElement(
        _TriptychGrid2.default,
        { className: 'main-menu' },
        _react2.default.createElement(
            _TriptychGridItem2.default,
            { padded: true },
            _react2.default.createElement(_Icon2.default, { name: 'bars' })
        ),
        _react2.default.createElement(
            _TriptychGridItem2.default,
            { centered: true },
            'TODO'
        ),
        _react2.default.createElement(
            _TriptychGridItem2.default,
            { padded: true },
            _react2.default.createElement(_Icon2.default, { name: 'search' })
        )
    );
};

exports.default = MainMenu;

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(671);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserGreeting = function UserGreeting(props) {
    var user = props.user;


    return _react2.default.createElement(
        'div',
        { className: 'user-greeting' },
        _react2.default.createElement('div', { className: 'user-greeting__avatar' }),
        _react2.default.createElement(
            'div',
            { className: 'user-greeting__hello' },
            'Hello, ',
            user.name,
            '.'
        ),
        'Looks like it\'s going to be very productive day. Let\'s get started!'
    );
};

UserGreeting.propTypes = {
    user: _propTypes2.default.shape({})
};

UserGreeting.defaultProp = {
    user: {}
};

exports.default = UserGreeting;

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CountRun = __webpack_require__(673);

var _CountRun2 = _interopRequireDefault(_CountRun);

__webpack_require__(674);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PercentBar = function PercentBar(props) {
    var percentAmount = props.percentAmount,
        color = props.color;

    var percent = 100 * percentAmount;
    return _react2.default.createElement(
        'div',
        { className: 'percent-bar' },
        _react2.default.createElement(
            'div',
            { className: 'percent-bar-scale' },
            _react2.default.createElement('div', {
                className: 'percent-bar-scale__fill',
                style: {
                    width: percent + '%',
                    backgroundColor: color
                }
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'percent-bar__amount' },
            _react2.default.createElement(
                _CountRun2.default,
                { duration: 400 },
                Math.ceil(percent)
            ),
            '%'
        )
    );
};

PercentBar.propTypes = {
    percentAmount: _propTypes2.default.number,
    color: _propTypes2.default.string
};

PercentBar.defaultProps = {
    percentAmount: 0,
    color: null
};

exports.default = PercentBar;

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CountRun = function (_React$Component) {
    (0, _inherits3.default)(CountRun, _React$Component);

    function CountRun(props) {
        (0, _classCallCheck3.default)(this, CountRun);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CountRun.__proto__ || Object.getPrototypeOf(CountRun)).call(this, props));

        _this.state = {
            count: 0
        };

        _this.endCount = 0;
        _this.animationStep = 0;
        _this.animationTocken = null;
        return _this;
    }

    (0, _createClass3.default)(CountRun, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                count: Number(this.props.children)
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.children !== nextProps.children) {
                this.startTicking(Number(nextProps.children));
            }
        }
    }, {
        key: 'startTicking',
        value: function startTicking(endCount) {
            if (this.animationTocken) {
                window.cancelAnimationFrame(this.animationTocken);
            }
            var duration = this.props.duration;

            this.endCount = endCount;
            var stepsAmount = duration / 16;
            this.animationStep = (this.endCount - this.state.count) / stepsAmount;
            this.tick();
        }
    }, {
        key: 'tick',
        value: function tick() {
            var _this2 = this;

            this.animationTocken = window.requestAnimationFrame(function () {
                var countRaw = _this2.state.count + _this2.animationStep;
                var count = _this2.animationStep > 0 ? Math.ceil(countRaw) : Math.floor(countRaw);
                if (_this2.animationStep > 0 && count <= _this2.endCount || _this2.animationStep < 0 && count >= _this2.endCount) {
                    _this2.setState({
                        count: count
                    });
                    _this2.tick();
                } else {
                    _this2.setState({
                        count: _this2.endCount
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;

            return _react2.default.createElement(
                'span',
                { className: className },
                this.state.count
            );
        }
    }]);
    return CountRun;
}(_react2.default.Component);

CountRun.propTypes = {
    className: _propTypes2.default.string,
    duration: _propTypes2.default.number
};

CountRun.defaultProps = {
    className: '',
    duration: 200
};

exports.default = CountRun;

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(94);

var _Icon2 = _interopRequireDefault(_Icon);

__webpack_require__(676);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectIcon = function ProjectIcon(props) {
    var color = props.color,
        icon = props.icon;

    return _react2.default.createElement(
        'div',
        {
            className: 'project-icon-wrap',
            style: {
                color: color
            }
        },
        _react2.default.createElement(_Icon2.default, {
            className: 'project-icon-wrap__icon',
            name: icon
        })
    );
};

ProjectIcon.propTypes = {
    color: _propTypes2.default.string,
    icon: _propTypes2.default.string
};

ProjectIcon.defaultProps = {
    color: null,
    icon: null
};

exports.default = ProjectIcon;

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(678);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectTitle = function ProjectTitle(props) {
    var tasksAmount = props.tasksAmount;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'project-title__amount' },
            tasksAmount,
            ' tasks'
        ),
        _react2.default.createElement(
            'div',
            { className: 'project-title__name' },
            props.children
        )
    );
};

ProjectTitle.propTypes = {
    tasksAmount: _propTypes2.default.number
};

ProjectTitle.defaultProps = {
    tasksAmount: 0
};

exports.default = ProjectTitle;

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _ModalMenu = __webpack_require__(681);

var _ModalMenu2 = _interopRequireDefault(_ModalMenu);

__webpack_require__(683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_React$Component) {
    (0, _inherits3.default)(Modal, _React$Component);

    function Modal(props) {
        (0, _classCallCheck3.default)(this, Modal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            open: false,
            animation: false,
            top: null,
            left: null,
            width: null,
            height: null
        };

        _this.isClosing = false;
        return _this;
    }

    (0, _createClass3.default)(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.open !== nextProps.open) {
                if (nextProps.open === true) {
                    this.openModal(nextProps);
                } else {
                    this.closeModal(nextProps);
                }
            }
        }
    }, {
        key: 'openModal',
        value: function openModal(props) {
            var _this2 = this;

            var rect = props.rect;

            this.setState({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            });

            // I used before `window.requestAnimationFrame`,
            // but it's worked too fast and the first opening animation was buggy
            // Therefore I switched to setTimeout
            setTimeout(function () {
                _this2.setState({
                    animation: true
                }, function () {
                    _this2.setState({
                        open: true,
                        top: null,
                        left: null,
                        width: null,
                        height: null
                    });
                });
            }, 16);
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
            var rect = props.rect;

            this.setState({
                open: false,
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            });
            this.isClosing = true;
        }
    }, {
        key: 'transitionEnded',
        value: function transitionEnded() {
            if (this.isClosing) {
                this.setState({
                    animation: false,
                    open: false,
                    top: null,
                    left: null,
                    width: null,
                    height: null
                });
                this.isClosing = false;
            }
        }
    }, {
        key: 'sendCloseAction',
        value: function sendCloseAction() {
            var onClose = this.props.onClose;

            onClose && onClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                buttons = _props.buttons,
                caption = _props.caption;

            var modalClass = (0, _classnames2.default)({
                'modal': true,
                'modal_animation': this.state.animation,
                'modal_open': this.state.open
            });
            return _react2.default.createElement(
                'div',
                {
                    className: modalClass,
                    style: {
                        top: this.state.top,
                        left: this.state.left,
                        width: this.state.width,
                        height: this.state.height,
                        borderRadius: this.state.borderRadius
                    },
                    onTransitionEnd: this.transitionEnded.bind(this)
                },
                _react2.default.createElement(
                    _ModalMenu2.default,
                    {
                        open: this.state.open,
                        buttons: buttons,
                        onLeftClick: this.sendCloseAction.bind(this)
                    },
                    caption
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal__content' },
                    this.props.children
                )
            );
        }
    }]);
    return Modal;
}(_react2.default.Component);

Modal.propTypes = {
    rect: _propTypes2.default.shape({
        top: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        left: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }),
    buttons: _propTypes2.default.shape({
        left: _propTypes2.default.shape({
            icon: _propTypes2.default.string,
            onClick: _propTypes2.default.func
        }),
        right: _propTypes2.default.shape({
            icon: _propTypes2.default.string,
            onClick: _propTypes2.default.func
        })
    }),
    caption: _propTypes2.default.string,
    open: _propTypes2.default.bool
};

Modal.defaultProps = {
    rect: null,
    open: false,
    caption: '',
    buttons: undefined
};

exports.default = Modal;

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(94);

var _Icon2 = _interopRequireDefault(_Icon);

var _TriptychGrid = __webpack_require__(143);

var _TriptychGrid2 = _interopRequireDefault(_TriptychGrid);

var _TriptychGridItem = __webpack_require__(144);

var _TriptychGridItem2 = _interopRequireDefault(_TriptychGridItem);

__webpack_require__(682);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalMenu = function ModalMenu(props) {
    var open = props.open,
        buttons = props.buttons;

    var menuClass = (0, _classnames2.default)({
        'modal-menu': true,
        'modal-menu_open': open
    });

    var renderButton = function renderButton(button) {
        var icon = button.icon ? _react2.default.createElement(_Icon2.default, { name: button.icon }) : _react2.default.createElement(
            'span',
            null,
            '\xA0'
        );
        return _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                    return button.onClick && button.onClick();
                } },
            icon
        );
    };

    return _react2.default.createElement(
        _TriptychGrid2.default,
        { className: menuClass },
        _react2.default.createElement(
            _TriptychGridItem2.default,
            { padded: true },
            renderButton(buttons.left)
        ),
        _react2.default.createElement(
            _TriptychGridItem2.default,
            { centered: true },
            props.children
        ),
        _react2.default.createElement(
            _TriptychGridItem2.default,
            { padded: true },
            renderButton(buttons.right)
        )
    );
};

ModalMenu.propTypes = {
    open: _propTypes2.default.bool,
    buttons: _propTypes2.default.shape({
        left: _propTypes2.default.shape({
            icon: _propTypes2.default.string,
            onClick: _propTypes2.default.func
        }),
        right: _propTypes2.default.shape({
            icon: _propTypes2.default.string,
            onClick: _propTypes2.default.func
        })
    })
};

ModalMenu.defaultProps = {
    open: false,
    buttons: {
        left: {
            icon: 'arrow-left',
            onClick: null
        },
        right: {
            icon: 'ellipsis-v',
            onClick: null
        }
    }
};

exports.default = ModalMenu;

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCurrentProjectId = setCurrentProjectId;
exports.setCurrentProjectRect = setCurrentProjectRect;
exports.toggleProjectModal = toggleProjectModal;

var _currentProjectConst = __webpack_require__(203);

var currentProjectConst = _interopRequireWildcard(_currentProjectConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setCurrentProjectId(projectId) {
    return {
        type: currentProjectConst.SET_CURRENT_PROJECT_ID,
        projectId: projectId
    };
}

function setCurrentProjectRect(rect) {
    return {
        type: currentProjectConst.SET_CURRENT_PROJECT_RECT,
        rect: rect
    };
}

function toggleProjectModal(open) {
    return {
        type: currentProjectConst.TOGGLE_PROJECT_MODAL,
        open: open
    };
}

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(55);

var _reselect = __webpack_require__(73);

var _ProjectHeader = __webpack_require__(342);

var _ProjectHeader2 = _interopRequireDefault(_ProjectHeader);

var _ProjectTasks = __webpack_require__(686);

var _ProjectTasks2 = _interopRequireDefault(_ProjectTasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectSelector = (0, _reselect.createSelector)(function (props) {
    return props.currentProject;
}, function (props) {
    return props.projects;
}, function (currentProject, projects) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = projects.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var project = _step.value;

            if (project.id === currentProject.projectId) {
                return project;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return {};
});

var doneTasksAmountSelector = (0, _reselect.createSelector)(projectSelector, function (props) {
    return props.tasks;
}, function (project, tasks) {
    return tasks.data.reduce(function (acc, task) {
        if (project.tasks && project.tasks.includes(task.id) && task.done) {
            return acc + 1;
        }
        return acc;
    }, 0);
});

var Project = function (_React$Component) {
    (0, _inherits3.default)(Project, _React$Component);

    function Project() {
        (0, _classCallCheck3.default)(this, Project);
        return (0, _possibleConstructorReturn3.default)(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
    }

    (0, _createClass3.default)(Project, [{
        key: 'render',
        value: function render() {
            var currentProject = this.props.currentProject;

            var project = projectSelector(this.props);
            var doneAmount = doneTasksAmountSelector(this.props);
            var percentDone = !project.tasks || project.tasks.length === 0 ? 0 : doneAmount / project.tasks.length;
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_ProjectHeader2.default, {
                    color: project.color,
                    name: project.name,
                    percentDone: percentDone,
                    icon: project.icon,
                    tasksAmount: project.tasks.length - doneAmount,
                    open: currentProject.open
                }),
                _react2.default.createElement(_ProjectTasks2.default, {
                    project: project,
                    open: currentProject.open
                })
            );
        }
    }]);
    return Project;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        currentProject: state.currentProject,
        projects: state.projects,
        tasks: state.tasks
    };
})(Project);

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(55);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reselect = __webpack_require__(73);

var _TaskItem = __webpack_require__(687);

var _TaskItem2 = _interopRequireDefault(_TaskItem);

var _projectActions = __webpack_require__(345);

__webpack_require__(691);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tasksSelector = (0, _reselect.createSelector)(function (props) {
    return props.project;
}, function (props) {
    return props.tasks;
}, function (project, tasks) {
    if (project.tasks && project.tasks.length > 0) {
        return tasks.data.filter(function (task) {
            return project.tasks.includes(task.id);
        });
    }
    return [];
});

var ProjectTasks = function (_React$Component) {
    (0, _inherits3.default)(ProjectTasks, _React$Component);

    function ProjectTasks() {
        (0, _classCallCheck3.default)(this, ProjectTasks);
        return (0, _possibleConstructorReturn3.default)(this, (ProjectTasks.__proto__ || Object.getPrototypeOf(ProjectTasks)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectTasks, [{
        key: 'removeTask',
        value: function removeTask(taskId) {
            var _props = this.props,
                project = _props.project,
                removeTaskFromProject = _props.removeTaskFromProject;

            removeTaskFromProject(project.id, taskId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var tasks = tasksSelector(this.props);

            var open = this.props.open;

            var tasksClass = (0, _classnames2.default)({
                'project-tasks': true,
                'project-tasks_open': open
            });

            return _react2.default.createElement(
                'div',
                { className: tasksClass },
                _react2.default.createElement(
                    'div',
                    { className: 'project-tasks__name' },
                    'Tasks'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-tasks-list' },
                    tasks.map(function (task, index) {
                        var key = 'project-tasks-list_item-' + index + '-' + task.name.replace(/\s/g, '-');
                        return _react2.default.createElement(_TaskItem2.default, {
                            task: task,
                            onDelete: _this2.removeTask.bind(_this2),
                            key: key
                        });
                    })
                )
            );
        }
    }]);
    return ProjectTasks;
}(_react2.default.Component);

ProjectTasks.propTypes = {
    project: _propTypes2.default.shape({}),
    open: _propTypes2.default.bool
};

ProjectTasks.defaultProps = {
    project: {},
    open: false
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        tasks: state.tasks
    };
}, {
    removeTaskFromProject: _projectActions.removeTaskFromProject
})(ProjectTasks);

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(55);

var _Icon = __webpack_require__(94);

var _Icon2 = _interopRequireDefault(_Icon);

var _LTText = __webpack_require__(688);

var _LTText2 = _interopRequireDefault(_LTText);

var _TriptychGrid = __webpack_require__(143);

var _TriptychGrid2 = _interopRequireDefault(_TriptychGrid);

var _TriptychGridItem = __webpack_require__(144);

var _TriptychGridItem2 = _interopRequireDefault(_TriptychGridItem);

var _taskActions = __webpack_require__(344);

__webpack_require__(690);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskItem = function (_React$Component) {
    (0, _inherits3.default)(TaskItem, _React$Component);

    function TaskItem() {
        (0, _classCallCheck3.default)(this, TaskItem);
        return (0, _possibleConstructorReturn3.default)(this, (TaskItem.__proto__ || Object.getPrototypeOf(TaskItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TaskItem, [{
        key: 'deleteTask',
        value: function deleteTask(e) {
            var _props = this.props,
                task = _props.task,
                deleteTask = _props.deleteTask,
                onDelete = _props.onDelete;

            if (task.done) {
                e.stopPropagation();
                deleteTask(task.id);
                onDelete(task.id);
            }
        }
    }, {
        key: 'toggleDone',
        value: function toggleDone() {
            var _props2 = this.props,
                task = _props2.task,
                toggleTaskDone = _props2.toggleTaskDone;

            toggleTaskDone(task.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var task = this.props.task;

            var checkboxClass = (0, _classnames2.default)({
                'task__checkbox': true,
                'task__checkbox_checked': task.done
            });
            var nameClass = (0, _classnames2.default)({
                'task__name': true,
                'task__name_checked': task.done
            });
            var deleteClass = (0, _classnames2.default)({
                'task__delete': true,
                'task__delete_show': task.done
            });
            return _react2.default.createElement(
                'div',
                {
                    className: 'task',
                    onClick: this.toggleDone.bind(this)
                },
                _react2.default.createElement(
                    _TriptychGrid2.default,
                    null,
                    _react2.default.createElement(
                        _TriptychGridItem2.default,
                        null,
                        _react2.default.createElement('div', { className: checkboxClass })
                    ),
                    _react2.default.createElement(
                        _TriptychGridItem2.default,
                        null,
                        _react2.default.createElement(
                            _LTText2.default,
                            {
                                className: nameClass,
                                lineThrough: task.done
                            },
                            task.name
                        )
                    ),
                    _react2.default.createElement(
                        _TriptychGridItem2.default,
                        null,
                        _react2.default.createElement(
                            'div',
                            {
                                className: deleteClass,
                                onClick: this.deleteTask.bind(this)
                            },
                            _react2.default.createElement(_Icon2.default, { name: 'trash-o' })
                        )
                    )
                )
            );
        }
    }]);
    return TaskItem;
}(_react2.default.Component);

TaskItem.propTypes = {
    task: _propTypes2.default.shape({}),
    onDelete: _propTypes2.default.func
};

TaskItem.defaultProps = {
    task: {},
    onDelete: null
};

exports.default = (0, _reactRedux.connect)(function () {
    return {};
}, {
    toggleTaskDone: _taskActions.toggleTaskDone,
    deleteTask: _taskActions.deleteTask
})(TaskItem);

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(689);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LTText = function (_React$Component) {
    (0, _inherits3.default)(LTText, _React$Component);

    function LTText(props) {
        (0, _classCallCheck3.default)(this, LTText);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LTText.__proto__ || Object.getPrototypeOf(LTText)).call(this, props));

        _this.state = {
            lineWidth: 0,
            animated: false
        };

        _this.textRef = null;
        return _this;
    }

    (0, _createClass3.default)(LTText, [{
        key: 'setTextRef',
        value: function setTextRef(ref) {
            this.textRef = ref;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                lineWidth: this.textRef.offsetWidth
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.lineThrough !== nextProps.lineThrough) {
                this.setState({
                    animated: true
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                lineThrough = _props.lineThrough,
                className = _props.className;

            var wrapClass = (0, _classnames2.default)(className, 'lt-text-wrap');
            var ltClass = (0, _classnames2.default)({
                'lt-text-line': true,
                'lt-text-line_animated': this.state.animated
            });
            return _react2.default.createElement(
                'div',
                { className: wrapClass },
                _react2.default.createElement('div', {
                    className: ltClass,
                    style: {
                        width: lineThrough ? this.state.lineWidth : 0
                    }
                }),
                _react2.default.createElement(
                    'span',
                    { ref: this.setTextRef.bind(this) },
                    this.props.children
                )
            );
        }
    }]);
    return LTText;
}(_react2.default.Component);

LTText.propTypes = {
    lineThrough: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

LTText.defaultProps = {
    lineThrough: false,
    className: ''
};

exports.default = LTText;

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(55);

var _reselect = __webpack_require__(73);

var _Input = __webpack_require__(693);

var _Input2 = _interopRequireDefault(_Input);

var _currentTaskActions = __webpack_require__(343);

__webpack_require__(695);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taskSelector = (0, _reselect.createSelector)(function (props) {
    return props.currentTask;
}, function (props) {
    return props.tasks;
}, function (currentTask, tasks) {
    return tasks.data.find(function (task) {
        return task.id === currentTask.taskId;
    });
});

var Task = function (_React$Component) {
    (0, _inherits3.default)(Task, _React$Component);

    function Task(props) {
        (0, _classCallCheck3.default)(this, Task);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));

        _this.state = {
            task: null
        };
        return _this;
    }

    (0, _createClass3.default)(Task, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var task = taskSelector(this.props);
            this.setState({
                task: task || null
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var currentTaskChanged = this.props.currentTask !== nextProps.currentTask;
            var tasksChanged = this.props.tasks !== nextProps.tasks;
            if (currentTaskChanged || tasksChanged) {
                var task = taskSelector(this.props);
                this.setState({
                    task: task || null
                });
            }
        }
    }, {
        key: 'updateTaskName',
        value: function updateTaskName(name) {
            var updateTaskName = this.props.updateTaskName;

            updateTaskName(name);
        }
    }, {
        key: 'render',
        value: function render() {
            var currentTask = this.props.currentTask;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'task-name-description' },
                    'What are you planning to do?'
                ),
                _react2.default.createElement(_Input2.default, {
                    placeholder: 'Task name',
                    value: currentTask.name,
                    error: currentTask.nameError,
                    onChange: this.updateTaskName.bind(this)
                })
            );
        }
    }]);
    return Task;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        currentTask: state.currentTask,
        tasks: state.tasks
    };
}, {
    updateTaskName: _currentTaskActions.updateTaskName
})(Task);

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(694);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_React$Component) {
    (0, _inherits3.default)(Input, _React$Component);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'changeHandler',
        value: function changeHandler(e) {
            var _props = this.props,
                onChange = _props.onChange,
                value = _props.value;

            var inputValue = e.target.value;
            onChange && onChange(inputValue);
            if (value === undefined) {
                this.setState({
                    value: inputValue
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.value !== nextProps.value) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                placeholder = _props2.placeholder,
                error = _props2.error;

            var inputClass = (0, _classnames2.default)(className, {
                'input': true,
                'input_error': error
            });
            return _react2.default.createElement('input', {
                className: inputClass,
                placeholder: placeholder,
                value: this.state.value,
                onChange: this.changeHandler.bind(this)
            });
        }
    }]);
    return Input;
}(_react2.default.Component);

Input.propTypes = {
    value: _propTypes2.default.string,
    className: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    error: _propTypes2.default.bool
};

Input.defaultProps = {
    value: undefined,
    className: '',
    placeholder: '',
    onChange: null,
    error: false
};

exports.default = Input;

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(697);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTaskBtn = function (_React$Component) {
    (0, _inherits3.default)(AddTaskBtn, _React$Component);

    function AddTaskBtn() {
        (0, _classCallCheck3.default)(this, AddTaskBtn);
        return (0, _possibleConstructorReturn3.default)(this, (AddTaskBtn.__proto__ || Object.getPrototypeOf(AddTaskBtn)).apply(this, arguments));
    }

    (0, _createClass3.default)(AddTaskBtn, [{
        key: 'handleClick',
        value: function handleClick() {
            var onClick = this.props.onClick;

            onClick && onClick();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                isSaving = _props.isSaving;

            var btnClass = (0, _classnames2.default)({
                'add-task-button': true,
                'add-task-button_open': open,
                'add-task-button_is-saving': isSaving
            });
            var text = isSaving ? 'Save' : '+';
            return _react2.default.createElement(
                'div',
                {
                    className: btnClass,
                    onClick: this.handleClick.bind(this)
                },
                _react2.default.createElement(
                    'span',
                    { className: 'add-task-button__text' },
                    text
                )
            );
        }
    }]);
    return AddTaskBtn;
}(_react2.default.Component);

AddTaskBtn.propTypes = {
    open: _propTypes2.default.bool,
    isSaving: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
};

AddTaskBtn.defaultProps = {
    open: false,
    isSaving: false,
    onClick: null
};

exports.default = AddTaskBtn;

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateId = exports.generateId = function generateId() {
  return String(+new Date()) + String(Math.floor(Math.random() * 1000));
};

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(665);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(26);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(666);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
    var name = props.name,
        className = props.className;

    var iconClass = (0, _classnames3.default)(className, (0, _defineProperty3.default)({
        fa: true
    }, 'fa-' + name, true));

    return _react2.default.createElement('span', { className: iconClass });
};

Icon.propTypes = {
    className: _propTypes2.default.string,
    name: _propTypes2.default.string
};

Icon.defaultTypes = {
    className: '',
    name: ''
};

exports.default = Icon;

/***/ })

},[346]);
//# sourceMappingURL=bundle.js.map