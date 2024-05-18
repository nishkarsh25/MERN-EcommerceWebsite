import { createContext, useEffect } from "react";
import ProductAPI from "./api/ProductAPI";
import { useState } from "react";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext()

