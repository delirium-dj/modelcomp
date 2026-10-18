# MiniMax M2.5 - findings by GPT 5.6 Terra

- Source: MiniMax/MiniMax-M2.5
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight reasoning MoE for coding, search, and agentic work. The upstream model and MiniMax's OpenCode integration identify it as the model behind `opencode/minimax-m2.5`.
- **Provider / access:** MiniMax API, local deployment, and OpenCode route `opencode/minimax-m2.5`; official upstream ID `MiniMax-M2.5`.
- **Release / knowledge:** 2026-02-12 release (Artificial Analysis); no vendor knowledge cutoff was found in the reviewed sources.
- **IDs:** `MiniMax-M2.5`; Hugging Face `MiniMaxAI/MiniMax-M2.5`; OpenCode `opencode/minimax-m2.5`.
- **Context window:** About 205K tokens (Artificial Analysis); the model is a 200K-class text context model.
- **Modalities:** Text input/output; reasoning and tool calling. No image, audio, video, or non-text output is documented.
- **Pricing (as of 2026-10-18):** M2.5 costs $0.15 input and $0.60 output per 1M tokens at 50 TPS; identical-capability M2.5-Lightning costs $0.30/$2.40 at 100 TPS. Both support caching.
- **Architecture:** 230B total / 10B active MoE open weights under the Modified-MIT license.

### Raw benchmarks found

Agent / tool use:

- BrowseComp with context management: **76.3%** (MiniMax official model report: https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/README.md).
- SWE-bench Verified on the OpenCode harness: **76.1%** (MiniMax official model report).
- MiniMax reports M2.5 used about **20% fewer rounds** than M2.1 across BrowseComp, Wide Search, and RISE; this is a vendor efficiency claim, not a benchmark score (official report).

Reasoning / knowledge:

- GPQA Diamond: **85.2%**; HLE without tools: **19.4%**; SciCode: **44.4%**; IFBench: **70.0%**; AA-LCR: **69.5%** (MiniMax official model report).
- Artificial Analysis Intelligence Index: **23** estimated (https://artificialanalysis.ai/models/minimax-m2-5).

Coding:

- SWE-bench Verified: **80.2%**; Multi-SWE-Bench: **51.3%** (MiniMax official model report).
- SWE-bench Verified with OpenCode: **76.1%** and Droid: **79.7%** (MiniMax official model report).
- Vibe Code Bench v1.1: **14.85%** (Vals result indexed by BenchLM: https://benchlm.ai/models/minimax-m2-5).

Long context:

- AA-LCR: **69.5%** (MiniMax official model report); no exact 205K retrieval result was found.

### Normalized scores (1-100)

- **Tool use: 76/100.** BrowseComp at 76.3% and an OpenCode SWE-bench result of 76.1% show capable agent use, but comparable public Tau, Terminal-Bench, or MCP benchmark values were not found.
- **Reasoning: 71/100.** GPQA Diamond (85.2%) and AA-LCR (69.5%) are strong, while HLE without tools is 19.4%, SciCode is 44.4%, and the independent Intelligence Index is an estimated 23.
- **Context window: 72/100.** The 205K context reaches the 200K-500K tier, with AA-LCR 69.5% supporting a modest score above its floor but no near-limit retrieval evidence.
- **Multimodal: 15/100.** MiniMax M2.5 is documented as text input/output only.
- **Coding: 82/100.** SWE-bench Verified (80.2%), OpenCode (76.1%), and Droid (79.7%) results are strong, but Multi-SWE-Bench (51.3%), SciCode (44.4%), and Vibe Code Bench (14.85%) keep it below the frontier tier.
- **Cost efficiency: 97/100.** $0.15/$0.60 per 1M tokens is near the best paid reference point, and the weights can also be locally deployed.
- **Overall Score: 63/100.** `(76 + 71 + 72 + 15 + 82) / 5 = 63.2`, rounded half-up; an economical text-only coding agent whose headline SWE-bench result should be balanced against mixed broader coding evidence.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-18
- Method: MiniMax vendor documentation, open-weight model card, Artificial Analysis, BenchLM, and OpenRouter access documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
