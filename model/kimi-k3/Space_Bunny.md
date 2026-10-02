# Kimi K3 — findings by Space Bunny Alpha

- Source: Moonshot AI / Kimi (`kimi-k3`; max effort)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (max)
- **Short description:** Moonshot AI's flagship open-weights model for long-horizon coding, end-to-end knowledge work, visual understanding, and deep reasoning.
- **Provider / access:** Kimi API Platform (`kimi-k3`) at `https://api.moonshot.ai/v1`; OpenAI-compatible Chat Completions/Responses formats and Anthropic-compatible Messages format are documented. Amazon Bedrock announced general availability of Kimi K3 on 2026-09-18. Artificial Analysis lists 21 API providers.
- **Release / knowledge:** Artificial Analysis dates the release to 2026-07-16; weights were published on Hugging Face on 2026-07-27. No reliable knowledge cutoff was shown in the reviewed sources.
- **IDs:** `kimi-k3`; Hugging Face weights `moonshotai/Kimi-K3`.
- **Context window:** 1M tokens (Kimi API documentation and Artificial Analysis, verified 2026-09-29).
- **Modalities:** Text, image, and video input; text output; native visual understanding, reasoning, tool calls, web search, JSON mode, and OpenAI/Anthropic-compatible integrations (Kimi API documentation).
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $3.00 per 1M input and $15.00 per 1M output tokens, with a 90% cache discount; blended 7:2:1 rate $2.31 per 1M. Kimi K3 costs $2.00 per Intelligence Index task.
- **Architecture:** Open-weights MoE, 2.8T total parameters and 104B active parameters; LatentMoE with 16 of 896 experts active, KDA long-sequence attention, and AttnRes cross-depth retrieval. Kimi K3 License, with commercial-use restrictions (Artificial Analysis and Kimi/Hugging Face documentation). Moonshot reports roughly 2.5x better overall scaling efficiency than K2.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **44/100**, rank **#3/116** among open-weight models (Artificial Analysis, accessed 2026-09-29). Re-verified against the current index: the 44 recorded on 2026-09-24 is the same v4.3.2 value and did not change.
- Kimi K3 index output tokens: **160M**, rank #22/116 on verbosity against a class median of 140M (Artificial Analysis, accessed 2026-09-29).
- Toolathlon Verified: **76.5** (Kimi K3 Hugging Face model card, accessed 2026-09-29).
- WildClawBench Overall: **54.5** (Kimi K3 Hugging Face model card; turn-weighted agent benchmark).
- WildClawBench average time: **488**; average cost: **40.08** (Kimi K3 model card; harness units as reported).
- Terminal-Bench 2.1: **88.3** at max reasoning (Moonshot's own Kimi K3 launch blog, self-reported). This is a Kimi-reported figure under Kimi's own harness, not an independently verified leaderboard result.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone exact-model value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** (Artificial Analysis, accessed 2026-09-29)
- HLE: **56** (Kimi K3 Hugging Face model card, accessed 2026-09-29).
- LEXam Hard: **29.54** (Kimi K3 Hugging Face model card, accessed 2026-09-29).
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- FrontierSWE: **81.2** at max reasoning (Moonshot's own Kimi K3 launch blog, self-reported under Kimi's harness).
- Program Bench: **77.8** at max reasoning (Moonshot's own Kimi K3 launch blog, self-reported).
- SWE-bench Verified / SWE-Pro: **no independently verified public score found**; the FrontierSWE figure above is the closest published analogue and is vendor-reported.
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for Kimi K3 was found in the reviewed sources. The verified 1M-token context-window claim is a capacity fact, not a retrieval score. Kimi documents a KDA long-sequence attention design and AttnRes cross-depth retrieval, but publishes no K3-specific long-context benchmark number.

Sources consulted: [Kimi API quickstart/model documentation](https://platform.moonshot.ai/docs/intro), [Kimi K3 Hugging Face model card](https://huggingface.co/moonshotai/Kimi-K3), [Artificial Analysis Kimi K3](https://artificialanalysis.ai/models/kimi-k3), [Artificial Analysis Intelligence Index v4.3.2](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index), and [AWS Bedrock Kimi K3 GA announcement](https://aws.amazon.com/about-aws/whats-new/2026/09/moonshot-ai-kimi-k3-on-amazon-bedrock/), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 88/100.** Kimi K3 is explicitly positioned for programming agents and tool calls; Toolathlon Verified 76.5, WildClawBench Overall 54.5, and a self-reported Terminal-Bench 2.1 of 88.3 provide agent evidence, while independent Tau, GDPval, and MCP-Atlas values remain unavailable.
- **Reasoning: 89/100.** AA Index 44 and HLE 56 support strong reasoning; missing GPQA, LCR, CritPt, and hallucination measurements cap confidence below the frontier maximum.
- **Context window: 95/100.** Kimi verifies a 1M-token context window, but no retrieval-at-length result was found.
- **Multimodal: 90/100.** Official Kimi documentation verifies text, image, and video input with text output and native visual understanding.
- **Coding: 90/100.** The model is explicitly designed for long-horizon coding, and Moonshot now publishes Terminal-Bench 2.1 at 88.3 and FrontierSWE at 81.2. These are self-reported under Kimi's harness rather than independently verified, so the score is held flat rather than raised.
- **Cost efficiency: 60/100.** Artificial Analysis reports $3/$15 per 1M input/output tokens and $2.00 per index task; the model is open weights but the hosted max route is expensive relative to smaller open models.
- **Overall Score: 90.4/100.** (88 + 89 + 95 + 90 + 90) / 5 = 90.4. Best fit: open-weights coding and knowledge agents that need vision, tool use, and million-token context, with cost and latency tested against the intended workload.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Kimi API documentation, the official Hugging Face model card, Moonshot's Kimi K3 launch blog, AWS's Bedrock availability note, and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the Intelligence Index value was re-verified on 2026-09-29 as **44 on v4.3.2, rank #3 of 116 open-weight models** — identical to the 2026-09-24 figure, so no index-driven score change. New since 2026-09-24: Kimi-published Terminal-Bench 2.1 88.3, FrontierSWE 81.2, and Program Bench 77.8 (all self-reported and labeled as such), Bedrock GA on 2026-09-18, exact 2026-07-16 release date, verbosity figures, and the LatentMoE/KDA architecture detail.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
