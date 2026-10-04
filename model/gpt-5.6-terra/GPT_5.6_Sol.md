# GPT-5.6 Terra — findings by GPT 5.6 Sol

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's middle GPT-5.6 tier, balancing frontier-adjacent reasoning, coding, and agent capabilities against lower cost and higher speed than Sol.
- **Provider / access:** OpenAI API as `gpt-5.6-terra`, ChatGPT Work, Codex, Microsoft Azure, Amazon Bedrock, and GitHub Copilot; Responses and Chat Completions APIs.
- **Release / knowledge:** Generally released 2026-07-09; knowledge cutoff 2026-02-16.
- **IDs:** `openai/gpt-5.6-terra`; available to Free/Go users in ChatGPT Work and Codex, but no free API tier.
- **Context window:** 1,050,000 tokens with 128,000 maximum output.
- **Modalities:** Text and image input; text output; reasoning levels from none through max, function/tool calling, structured output, web/file search, code execution, computer use, MCP, and programmatic/multi-agent tooling.
- **Pricing (as of 2026-10-04):** $2/1M input, $0.20 cached input, and $12 output after the July price cut. Prompts above 272K cost 2x input and 1.5x output for the full request.
- **Architecture:** Proprietary; positioned as the GPT-5.6 analogue of the earlier mini tier.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: **40.21%** (Artificial Analysis independent run).
- ITBench-AA: **51.04%** (Artificial Analysis).
- APEX-Agents-AA: **38.94%** (Artificial Analysis).
- Agents' Last Exam: **50.4%** (OpenAI).
- GDPval-AA v2: **1593 Elo** (OpenAI).
- Terminal-Bench 2.1 repeated success: **55.2%** baseline and **60.9%** with FIRE policy (independent 87-task study, two attempts per task).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1: **55** (OpenAI comparison table).
- MLCR-AA: **31.67%** (Artificial Analysis).
- ARC-AGI-3 standard: **0.80%** (ARC Prize).
- Big Finance Bench: **51%** (OpenAI).
- GPQA Diamond / HLE: no verified public exact-model result found in the consulted sources.

Coding:

- SWE-Bench Pro V2 Full / Hard: **92.37% / 86.30%** (Scale AI / SEAL).
- Zero-shot self-orchestration coding benchmark: **85.0%** with a manager scaffold (independent study).
- LiveCodeBench / SciCode / DeepSWE: no verified public exact-model score found.

Long context:

- No verified public MRCR/RULER score found; the documented window is 1.05M tokens with a 128K output ceiling.

Multimodal:

- Image input is supported alongside text; no verified public exact-model multimodal benchmark was found, and native audio/video input is not documented.

Sources: [OpenAI API model reference](https://developers.openai.com/api/docs/models/gpt-5.6-terra), [OpenAI GPT-5.6 launch and evaluation table](https://openai.com/index/gpt-5-6/), [AIEvals evidence index](https://aievals.app/models/gpt-5-6-terra), and [OpenAI deployment safety card](https://deploymentsafety.openai.com/gpt-5-6-preview).

### Normalized scores (1–100)

- **Tool use: 88/100.** Broad native tooling and solid ITBench, Agents' Last Exam, and Terminal-Bench results support strong agency, with Tau3 and APEX limiting the score.
- **Reasoning: 90/100.** The AA index and professional benchmarks show strong reasoning near the prior flagship tier, while MLCR and ARC-AGI-3 expose remaining weaknesses.
- **Context window: 95/100.** A 1.05M-token window and 128K output are excellent, but missing public retrieval measurements prevent a higher score.
- **Multimodal: 70/100.** Image understanding complements text, but native audio/video and public multimodal evidence are absent.
- **Coding: 92/100.** SWE-Bench Pro V2 and orchestration results indicate elite repository work, capped by limited coverage of other current coding suites.
- **Cost efficiency: 86/100.** $2/$12 and $0.20 cached input offer strong value for this capability, though long-context surcharges and paid output remain material.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions; best as a balanced daily driver for coding, analysis, and tool-using workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official OpenAI documentation and independent benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
