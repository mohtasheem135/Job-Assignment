import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

// Latest
// export const states = [
//   {
//     value: "Himachal Pradesh",
//     label: "Himachal Pradesh"
//   },
//   {
//     value: "Goa",
//     label: "Goa"
//   },
//   {
//     value: "Bihar",
//     label: "Bihar"
//   },
// ]

// export const citys = [
//   {
//     value: "ranchi",
//     label: "ranchi",
//   },
// ]

export const localities = [
  {
    value: "HSR Layout",
    label: "HSR Layout",
  },
  {
    value: "Powai",
    label: "Powai",
  },
  {
    value: "MG Road",
    label: "MG Road",
  },
  {
    value: "Naini",
    label: "Naini",
  },
  {
    value: "Gandhi Bhawan",
    label: "Gandhi Bhawan",
  },
];

// export const locationType = [
//   {
//     value: "HIGHWAY",
//     label: "HIGHWAY",
//   },
//   {
//     value: "MALL",
//     label: "MALL",
//   },
// ];



// Final
let states = [];
let citys = [];
let locationType = [];

export const setStates = (newStates) => {
  states = newStates;
};

export const setCities = (newCities) => {
  citys = newCities;
};

export const setLocationType = (newlocationTypes) => {
  locationType = newlocationTypes
}

export const getStates = () => states;
export const getCities = () => citys;
export const getLocationTypes = () => locationType;
