# Kimi K3 — findings by Space Bunny Alpha

- Source: Moonshot AI / Kimi (`kimi-k3`; max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (max)
- **Short description:** Moonshot AI's flagship open-weights model for long-horizon coding, end-to-end knowledge work, visual understanding, and deep reasoning.
- **Provider / access:** Kimi API Platform (`kimi-k3`) at `https://api.moonshot.ai/v1`; OpenAI-compatible Chat Completions/Responses formats and Anthropic-compatible Messages format are documented. Kimi's model documentation also identifies the model as `kimi-k3`.
- **Release / knowledge:** Artificial Analysis lists July 2026; the Hugging Face repository metadata shows creation on 2026-06-13. No reliable knowledge cutoff was shown in the reviewed sources.
- **IDs:** `kimi-k3`; Hugging Face weights `moonshotai/Kimi-K3`.
- **Context window:** 1M tokens (Kimi API documentation and Artificial Analysis, verified 2026-09-24).
- **Modalities:** Text, image, and video input; text output; native visual understanding, reasoning, tool calls, web search, JSON mode, and OpenAI/Anthropic-compatible integrations (Kimi API documentation).
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $3.00 per 1M input and $15.00 per 1M output tokens, with a 90% cache discount; blended reported rate $2.31.
- **Architecture:** Open-weights MoE, 2.8T total parameters and 104B active parameters; Kimi K3 License, with commercial-use restrictions (Artificial Analysis and Kimi/Hugging Face documentation).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **44/100**, rank **#3/113** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Toolathlon Verified: **76.5** (Kimi K3 Hugging Face model card, accessed 2026-09-24)
- WildClawBench Overall: **54.5** (Kimi K3 Hugging Face model card; turn-weighted agent benchmark)
- WildClawBench average time: **488**; average cost: **40.08** (Kimi K3 model card; harness units as reported)
- Terminal-Bench 2.1: **no verified public score found** as a standalone exact-model value
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone exact-model value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** (Artificial Analysis, accessed 2026-09-24)
- HLE: **56** (Kimi K3 Hugging Face model card, accessed 2026-09-24)
- LEXam Hard: **29.54** (Kimi K3 Hugging Face model card, accessed 2026-09-24)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** as a standalone exact-model value
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for Kimi K3 was found in the reviewed sources. The verified 1M-token context-window claim is a capacity fact, not a retrieval score.

Sources consulted: [Kimi API quickstart/model documentation](https://platform.moonshot.ai/docs/intro), [Kimi K3 Hugging Face model card](https://huggingface.co/moonshotai/Kimi-K3), and [Artificial Analysis Kimi K3](https://artificialanalysis.ai/models/kimi-k3), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 88/100.** Kimi K3 is explicitly positioned for programming agents and tool calls; Toolathlon Verified 76.5 and WildClawBench Overall 54.5 provide measured agent evidence, while exact Terminal-Bench, Tau, GDPval, and MCP values remain unavailable.
- **Reasoning: 89/100.** AA Index 44 and HLE 56 support strong reasoning; missing GPQA, LCR, CritPt, and hallucination measurements cap confidence below the frontier maximum.
- **Context window: 95/100.** Kimi verifies a 1M-token context window, but no retrieval-at-length result was found.
- **Multimodal: 90/100.** Official Kimi documentation verifies text, image, and video input with text output and native visual understanding.
- **Coding: 90/100.** The model is explicitly designed for long-horizon coding and has strong agent results; exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not available in the reviewed sources.
- **Cost efficiency: 60/100.** Artificial Analysis reports $3/$15 per 1M input/output tokens; the model is open weights but the hosted max route is expensive relative to smaller open models.
- **Overall Score: 90.4/100.** (88 + 89 + 95 + 90 + 90) / 5 = 90.4. Best fit: open-weights coding and knowledge agents that need vision, tool use, and million-token context, with cost and latency tested against the intended workload.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Kimi API documentation, the official Hugging Face model card, and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
