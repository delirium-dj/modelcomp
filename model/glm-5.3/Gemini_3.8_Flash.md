# GLM-5.3 — findings by Gemini 3.8 Flash

- Source: Zhipu AI / ZAI (`zai-org/glm-5.3`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Zhipu AI's flagship foundation model featuring frontier coding capabilities, emergent cyber capabilities, and 1M context comprehension.
- **Provider / access:** Zhipu AI BigModel Open Platform API, Command Code (`zai-org/glm-5.3`), and OpenRouter.
- **Release / knowledge:** 2026-08-18 release; knowledge cutoff mid-2026.
- **IDs:** `zai-org/glm-5.3`. No Zen Free tier available.
- **Context window:** 1,000,000 tokens total (1M context window).
- **Modalities:** Text and code input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-08):** $1.40 / 1M input tokens, $0.26 / 1M cached input tokens, $4.40 / 1M output tokens.
- **Architecture:** Large-scale mixture-of-experts transformer optimized for agentic coding and security workflows.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **83.9%** (#17 of 54 scored, Artificial Analysis v4.3 / Command Code, Aug 2026)
- Agent-loop effective cost: **$0.60 / 1M** in
- Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA v4.3, Aug 2026)
- Intelligence Index: **44.8** (#13 of 67 scored, AA v4.3, Aug 2026)
- Long-context reasoning: **79.7** (AA v4.3, Aug 2026)

Coding:

- Coding Index: **74.8** (#15 of 54 scored, AA v4.3, Aug 2026)
- SciCode: **59.0** scientific coding (AA v4.3, Aug 2026)
- SWE-bench Verified: no verified public score found

Long context:

- 1M token context window evaluated with 79.7 long-context reasoning retention across extensive codebases.

### Normalized scores (1–100)

- **Tool use: 86/100.** High agentic tool proficiency demonstrated by 83.9% on Terminal-Bench (#17 ranked), supporting complex CLI interactions.
- **Reasoning: 88/100.** Outstanding reasoning with 91.7% on GPQA Diamond and an AA Intelligence Index of 44.8 (#13 overall).
- **Context window: 90/100.** Full 1M token context window with reliable retrieval across massive source documents.
- **Multimodal: 20/100.** Text and code-centric flagship; multimodal vision tasks are routed to GLM-V variants.
- **Coding: 89/100.** Top-tier coding prowess evidenced by 74.8 on the Coding Index and 59.0 on SciCode.
- **Cost efficiency: 75/100.** Balanced pricing at $1.40 / $4.40 per 1M tokens ($0.26 cached) for a flagship-tier model.
- **Overall Score: 75/100.** Powerful software development and cyber-reasoning model with 1M context, capped overall by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor disclosures and independent benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
