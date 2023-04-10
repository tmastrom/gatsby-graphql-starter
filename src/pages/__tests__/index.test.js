import * as React from "react"
import { render } from "@testing-library/react"
import * as Gatsby from "gatsby"

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
    site: {
        siteMetadata: {
            title: `Gatsby Test Starter`,
            description: `unit testing with Gatsby`,
            twitterHandle: "testtest",
            author: "tmastrom",
        }
    }
}

import Index from "../index"

describe(`Index`, () => {
    beforeEach(() => {
        useStaticQuery.mockImplementation(() => mockUseStaticQuery)
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it(`contains site metadata`, () => {
        const { getByText } = render(<Index />)
        getByText(`Gatsby Test Starter`)
        getByText(`unit testing with Gatsby`)
    })
})
