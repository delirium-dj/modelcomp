# Gemini 3.1 Pro — findings by Iceman

- Source: Google / Gemini 3.1 Pro
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3-series Pro preview model for complex reasoning, multimodal understanding, agentic workflows, and software engineering. Positioned as the upgraded core intelligence above Gemini 3 Pro for long-context and high-difficulty tasks.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.1-pro-preview` (preview) and `gemini-3.1-pro-preview-customtools`; also distributed via Gemini app, Vertex AI / Gemini Enterprise, Gemini CLI, Google Antigravity, Android Studio, and NotebookLM. Supports Gemini API tool/function-calling workflows (not a Chat Completions-only interface).
- **Release / knowledge:** Preview released/updated February 2026 per Google AI docs and DeepMind model card; knowledge cutoff not stated in cited public docs.
- **IDs:** `google/gemini-3.1-pro` (project id), API model codes `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools`. No separate Zen free ID verified in cited sources.
- **Context window:** 1,048,576 input tokens / 65,536 output tokens (Google AI model page; DeepMind model card states up to 1M input and 64K output).
- **Modalities:** Text, image, video, audio, and PDF input; text output. Thinking/reasoning supported; function calling, structured outputs, code execution, URL context, file search, and Google Search/Maps grounding supported per Google AI docs.
- **Pricing (as of 2026-11-11):** Gemini API paid preview pricing: $2.00/M input and $12.00/M output for prompts <= 200k tokens; $4.00/M input and $18.00/M output for prompts > 200k tokens (including thinking tokens), per Google AI pricing page. Free tier/testing access available in Google AI Studio; paid production use and data terms follow Google/Vertex AI terms.
- **Architecture:** Proprietary Google DeepMind Gemini-family model; parameter count and training details not publicly disclosed.

### Raw benchmarks found

> Scores below are vendor/self-reported or vendor-published benchmark results from official Google/DeepMind sources. No independent third-party leaderboard verification was performed in this pass beyond cited official pages.

Agent / tool use:

- τ2-bench (**agentic/tool use**, DeepMind model card / evals methodology): Retail **90.8%**, Telecom **99.3%**.
- MCP Atlas (**multi-step MCP workflows**): **69.2%**.
- BrowseComp (**agentic search**, Search + Python + Browse): **85.9%**.
- APEX-Agents (**long-horizon professional tasks**): **33.5%**.
- Terminal-Bench 2.0 (**agentic terminal coding**, Terminus-2 harness): **68.5%**.
- GDPval-AA (**expert tasks Elo**): **1317**.
- Tau3-Banking / Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond (**scientific knowledge**, no tools): **94.3%**.
- Humanity's Last Exam (**academic reasoning, full set text+MM**, no tools): **44.4%** (51.4% with search blocklist + code).
- ARC-AGI-2 (**abstract reasoning puzzles**, ARC Prize Verified): **77.1%**.
- MMMLU (**multilingual Q&A**): **92.6%**.
- MMMU-Pro (**multimodal understanding/reasoning**, no tools): **80.5%** (reported under multimodal-capable reasoning evals).
- LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / Omniscience Accuracy/Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified (**agentic coding**, single attempt): **80.6%**.
- SWE-bench Pro (**diverse agentic coding**, public, single attempt): **54.2%**.
- LiveCodeBench Pro (**competitive coding**, Elo): **2887**.
- SciCode (**scientific research coding**): **59%**.
- Terminal-Bench 2.0 (coding/agentic terminal): **68.5%**.
- Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**.

Long context:

- MRCR v2 (8-needle) long-context performance: **84.9%** at 128k (average), **26.3%** at 1M (pointwise), per DeepMind model card/evals methodology. Large 1M input window is documented, but measured needle-retrieval performance drops substantially at 1M.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong official agentic/tool-use evidence (τ2-bench 90.8% retail / 99.3% telecom, BrowseComp 85.9%, MCP Atlas 69.2%, Terminal-Bench 2.0 68.5%) supports high capability, but weaker long-horizon/APEX results (33.5%) and missing Tau3/Claw/Toolathon coverage cap confidence.
- **Reasoning: 94/100.** Exceptional abstract/scientific/multilingual reasoning signals (ARC-AGI-2 77.1%, GPQA Diamond 94.3%, MMMLU 92.6%) justify a top-tier score; HLE remains difficult (44.4% no tools) and some requested reasoning benchmarks are unreported, preventing a near-perfect score.
- **Context window: 84/100.** Tier is very high (1M input / 64K output documented), but the score is capped by measured long-context behavior: MRCR v2 is strong at 128k (84.9%) yet drops to 26.3% at 1M pointwise, indicating the full window is not uniformly reliable for precise retrieval.
- **Multimodal: 91/100.** Broad multimodal input coverage (text, image, video, audio, PDF) with strong reported multimodal reasoning (MMMU-Pro 80.5% no tools) and native Gemini multimodal positioning; text-only output and limited public multimodal-agent benchmark breadth keep it below the highest multimodal-native generators.
- **Coding: 89/100.** High coding performance on official benchmarks (SWE-bench Verified 80.6%, LiveCodeBench Pro Elo 2887, SciCode 59%, Terminal-Bench 2.0 68.5%) is strong, but SWE-bench Pro 54.2% and missing Vibe/DeepSWE-style public results cap the score.
- **Cost efficiency: 86/100.** Paid preview API pricing ($2/$12 up to 200k; $4/$18 above 200k per 1M tokens) is reasonable for a frontier Pro model and free-tier access exists in AI Studio, but it is not a low-cost/free-API option and long-context prompts become expensive.
- **Overall Score: 89/100.** Mean of the five non-cost quality dimensions (Tool 89, Reasoning 94, Context 84, Multimodal 91, Coding 89) = 89.4, rounded half-up to 89; best fit for complex multimodal reasoning, research, and agentic/coding tasks where strong reasoning matters more than uniformly reliable 1M-token retrieval.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-11
- Method: Fresh public web research using official Google AI and Google DeepMind pages fetched in this run; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro Preview model page (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [Gemini 3.1 Pro announcement (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Gemini 3.1 Pro model card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
