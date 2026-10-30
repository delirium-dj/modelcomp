# GPT-6.1 Terra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6.1 Terra (`openai/gpt-6.1-terra`)
- Date: 2026-10-30 (UTC; deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient model optimized for visual reasoning, precise computer use, and clear writing at lower cost.
- **Provider / access:** OpenAI API, ChatGPT Work, and Codex.
- **Release / knowledge:** Released October 2026; knowledge current to June 2026.
- **IDs:** `openai/gpt-6.1-terra`, `gpt-6.1-terra`
- **Context window:** 1,050,000 tokens total (922k max input, 128k output).
- **Modalities:** Text input, image input; text output; native tool calling.
- **Pricing (as of 2026-10-30):** $1.00 / 1M input tokens ($0.05 cached), $5.00 / 1M output tokens.
- **Architecture:** Optimized GPT-6 series transformer supporting variable reasoning effort.

### Raw benchmarks found

- Terminal-Bench 4.0 (Max): **50.3%** <(OpenAI system card addendum, 2026)>
- Agents' Last Exam (Max): **60.0%** <(OpenAI technical blog, 2026)>
- MMMU-Pro: **58.2%** <(OpenAI evaluation, 2026)>
- Artificial Analysis Intelligence Index: **51.0** <(Artificial Analysis, 2026)>

### Normalized scores (1–100)

- **Tool use: 82.9/100.** Strong agentic tool use and precise computer automation.
- **Reasoning: 83.3/100.** Solid visual reasoning and multi-step problem solving.
- **Context window: 92.6/100.** Robust 1M-token context window with efficient caching.
- **Multimodal: 73.0/100.** Reliable text and image understanding.
- **Coding: 81.0/100.** Competent command-line and software engineering capabilities (Terminal-Bench 50.3%).
- **Cost efficiency: 88.9/100.** Highly cost-effective frontier pricing (50% lower than GPT-5.6 Terra / GPT-6.1 Sol).
- **Overall Score: 82.6/100.** Best-fit recommendation: High-efficiency professional model for high-volume visual, writing, and computer-use tasks.

---

## Re-research update (2026-10-30)

- **Deep research verification:** Verified across official OpenAI release blog, system card addendum, and Artificial Analysis evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-30 (deep research)
- Method: Deep multi-source empirical research across OpenAI documentation, system card updates, and independent benchmarks; normalized 1–100 interpretations.
