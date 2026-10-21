# GPT-5.1-Codex — findings by Gemini 3.8 Flash

- Source: OpenAI/GPT-5.1-Codex (`gpt-5.1-codex`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's specialized software engineering and code-reasoning model within the GPT-5.1 family, designed for complex terminal workflows, automated repository debugging, and multi-file code synthesis.
- **Provider / access:** OpenAI API (`gpt-5.1-codex`), Responses API and Chat Completions API.
- **Release / knowledge:** 2025-11 release; training knowledge cutoff late 2025.
- **IDs:** `openai/gpt-5.1-codex`; no Free tier on Zen.
- **Context window:** 400,000 tokens (400K) total context window, 128,000 tokens (128K) maximum output tokens.
- **Modalities:** Text and image input (for architecture diagrams, wireframes, and UI mockups); text output; native tool use, code execution sandbox integration, and structured JSON output.
- **Pricing (as of 2026-10-21):** $1.25 / 1M input tokens, $10.00 / 1M output tokens; prompt caching read at $0.125 / 1M (approx. 90% discount on cache hits).
- **Architecture:** Proprietary reasoning architecture with adaptive test-time compute scaling across low, medium, and high reasoning effort settings.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 2.0: **58.1% - 68.5%** (multi-turn command line and DevOps environment tasks)
- Tau3-Banking / Tau2-Bench: **66.8%** (structured tool-calling workflows)
- GDPval-AA: **1420** (agentic task resolution rate)
- SWE-Lancer IC: **79.9%** (realistic freelance software engineering tasks)
- Toolathon / MCP-Atlas: **72.4%** (API orchestration)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (high-reasoning setting, no external web/search tools)
- HLE (Humanity's Last Exam): **28.4%** (challenging multidisciplinary academic reasoning)
- MMLU-Pro: **78.2%**
- Artificial Analysis Intelligence Index: **42**
- Omniscience Accuracy / Hallucination Rate: **84.2% / 5.1%**

Coding:

- SWE-bench Verified: **76.3%** (baseline official eval) / **77.9% - 78.0%** (Codex-Max agentic configuration)
- LiveCodeBench: **84.5%** (uncontaminated competitive algorithmic problem solving)
- SciCode / AA-SciCode: **48.2%** (computational scientific simulation code)
- Vibe Code Bench: **64.0%** (interactive UI component generation)

Long context:

- MRCR / RULER (400K window): **95.2%** multi-needle retrieval across 400K tokens with consistent reasoning stability up to window limit.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong terminal ops execution and tool calling with 68.5% on Terminal-Bench 2.1 and 79.9% SWE-Lancer IC; capped by test-time latency on deep reasoning chains.
- **Reasoning: 84/100.** Solid 88.1% GPQA Diamond and structured logic derivation; capped by 28.4% on Humanity's Last Exam and mid-tier composite intelligence index.
- **Context window: 80/100.** Ample 400K context window with 128K output capacity; capped below 1M+ frontier contexts.
- **Multimodal: 68/100.** Reliable image and diagram perception for software architecture and visual design inputs; capped by lack of video or audio modalities.
- **Coding: 88/100.** Robust 76.3%-78.0% SWE-bench Verified and 84.5% LiveCodeBench score; capped by newer 87%+ frontier coding iterations.
- **Cost efficiency: 72/100.** Competitive $1.25/$10.00 pricing with substantial 90% cache discount for multi-turn IDE sessions.
- **Overall Score: 80/100.** Quality arithmetic mean of the 5 core quality dimensions ((82 + 84 + 80 + 68 + 88) / 5 = 80.4 rounded to 80). Highly proficient specialized coding engine for full-stack programming.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing OpenAI platform disclosures, independent benchmark leaderboards (LiveCodeBench, Terminal-Bench), and safety/capability evaluations from METR and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
