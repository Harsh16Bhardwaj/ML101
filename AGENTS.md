<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Machine Learning 101 Notes Agents

This repo is a curated notes website for the user's daily study of *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition* by Aurelien Geron. The goal is retention: precise chapter notes, practical examples, use cases, traps, and interview-ready explanations.

## Operating contract

- Start by reading `src/content/chapters/types.ts` and `src/content/chapters/index.ts` before adding or editing notes.
- Preserve the existing chapter schema. Add content as structured notes, not as loose markdown dumps.
- Keep notes original and concise. Paraphrase and synthesize the book; do not copy long passages.
- Capture the strongest examples, theory, use cases, situations, caveats, and exercises from the chapter.
- Every substantive section should include a retention block with what to remember, where it shows up, and a one-line explanation.
- Add case studies where they clarify real-world behavior, deployment pitfalls, or why the book's theory matters.
- Use `caseStudies` and `reviewSnippets` in the chapter schema instead of hardcoding special content in UI components.
- Use `codeExamples` and `tables` for practical function notes, parameter explanations, and comparison tables when a chapter needs them.
- Prefer practical wording that helps the user explain the idea in interviews and apply it in projects.
- When a chapter becomes curated, change its `status` from `template` to `curated` and replace the placeholder section with real sections.
- Keep route slugs, chapter numbers, and navigation titles stable unless there is a clear reason to change them.
- Keep UI consistent with the dark, restrained, premium reading experience. Do not add noisy motion, marketing copy, or unrelated dashboards.

## Chapter note quality bar

For each chapter, include:

- Core concept map: what the chapter is trying to teach.
- Theory in plain English: the idea behind the method or workflow.
- Book examples and anchors: examples that make the idea memorable.
- Use cases: when the idea is useful in real ML work.
- Traps and misconceptions: what beginners usually misunderstand.
- Model/project situations: how the idea affects data, training, validation, deployment, or debugging.
- Quick recall cards: short prompts for active recall.
- Quick notes snippets: bottom-of-page reminders using the book's vocabulary, such as training instances, performance measure, generalization, hyperparameters, validation set, test set, and data mismatch.
- Session prompts: small exercises the user can answer after reading.

## Verification

Before handing off, run:

- `npm run lint`
- `npm run build`

For UI changes, also run the dev server and verify desktop and mobile layouts in the browser. Check that text does not overflow, chapter navigation works, and WebGL/animation elements are nonblank and not distracting from reading.
