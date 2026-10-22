# GLM 4.6 Flash — findings by Gemini 3.8 Flash

- Source: Z.ai (`opencode/glm-4.6-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash
- **Short description:** Z.ai's open-weights 9B multimodal vision-language model (GLM-4.6V-Flash) designed for fast edge execution, native visual function calling, and comprehensive document/video understanding.
- **Provider / access:** OpenCode Zen `opencode/glm-4.6-flash` (Free tier); Hugging Face `zai-org/GLM-4.6V-Flash`; self-hosted via GGUF/llama.cpp/vLLM.
- **Release / knowledge:** 2025-12-08 release; knowledge cutoff late 2025.
- **IDs:** `opencode/glm-4.6-flash`, `zai-org/GLM-4.6V-Flash`
- **Context window:** 128,000 tokens total (supporting up to 150 document pages or 1-hour video analysis).
- **Modalities:** Text, image, document, video in; text out; native visual function calling and structured tool execution.
- **Pricing (as of 2026-10-21):** Free on OpenCode Zen; open weights free for local self-hosting on ~6–8GB VRAM consumer GPUs.
- **Architecture:** 9B dense multimodal model (Vision encoder + MLP adapter + LLM decoder).

### Raw benchmarks found

Verified evaluations and benchmarks from official Z.ai release documentation, Hugging Face model cards, and benchmark leaderboards:

Agent / tool use:

- OSWorld (GUI Agent): **79.5%** (Z.ai technical report / desktop agent navigation)
- Webquest-SingleQA: **79.5%** (Web-based multi-step agent search)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- MMBench-V1.1: **88.8%** (Multimodal general vision-language QA)
- MMMU (Val): **76.0%** (College-level multimodal reasoning)
- MathVista: **85.2%** (Visual-mathematical problem solving)
- WeMath: **65.9%** (Visual math reasoning)
- GPQA Diamond: no verified public score found

Coding:

- Design2Code: **88.6%** (Visual screenshot-to-code frontend replication)
- Flame-React-Eval: **86.3%** (Component-level React UI generation)
- SWE-bench Verified / SWE-Pro: no verified public score found (vision-centric coding focus)

Long context:

- MMLongBench-Doc: **54.9%** (Long document multimodal retrieval across 128K context)
- VideoMME (with subtitles): **81.8%** (Long-context video understanding)

### Normalized scores (1–100)

- **Tool use: 78/100.** Exemplary GUI agent performance (79.5% on OSWorld and Webquest) and native visual function calling passing image parameters directly into tools, bounded by absence of command-line tool evals.
- **Reasoning: 77/100.** Strong multimodal reasoning (76.0% MMMU, 85.2% MathVista) across complex diagrams, though text-only abstract deduction is naturally bounded by its 9B parameter envelope.
- **Context window: 80/100.** 128K context window with verified long-document and 1-hour video comprehension (54.9% MMLongBench-Doc, 81.8% VideoMME).
- **Multimodal: 88/100.** True native vision-language architecture handling images, dense PDF tables, UI mockups, and video streams seamlessly.
- **Coding: 72/100.** Excellent frontend UI code reconstruction (88.6% Design2Code, 86.3% Flame-React-Eval), though lacks general full-repository autonomous software engineering data.
- **Cost efficiency: 98/100.** Free tier on OpenCode Zen and accessible open weights running locally on a single consumer GPU.
- **Overall Score: 79/100.** Arithmetic mean of the five non-cost quality dimensions: `(78 + 77 + 80 + 88 + 72) / 5 = 395 / 5 = 79.0`. Outstanding lightweight multimodal visual agent for edge deployment, UI automation, and document extraction.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation and web research across Z.ai technical announcements, Hugging Face model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
