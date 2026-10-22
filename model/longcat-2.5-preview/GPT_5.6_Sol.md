# LongCat 2.5 Preview — findings by GPT 5.6 Sol

- Source: Meituan (`meituan/longcat-2.5-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's closed multimodal reasoning preview for coding and agentic workflows, offered with a very large context at promotional pricing.
- **Provider / access:** Vercel AI Gateway `meituan/longcat-2.5-preview`; OpenAI-compatible endpoints and a temporary free OpenCode route have been advertised.
- **Release / knowledge:** Released 2026-09-26; cutoff not disclosed.
- **IDs:** `meituan/longcat-2.5-preview`, temporary `longcat-2.5-preview-free` route.
- **Context window:** 1,048,576 tokens with 131,072 maximum output ([Vercel listing](https://vercel.com/ai-gateway/models/longcat-2.5-preview)).
- **Modalities:** Text and image input, text output; optional reasoning, tools, attachments, and prompt caching.
- **Pricing (as of 2026-10-07):** Promotional $0.30/M input, $1.20/M output, $0.006/M cache reads; other gateways list higher rates.
- **Architecture:** Closed weights; third-party reporting describes a 1.6T-parameter foundation model, but active parameters are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 community replication: **48.7% pass@1** (130/267 across three runs) and **64.0% pass@3** (57/89), with 86 turns and 48K-token cap ([public run report](https://www.reddit.com/r/opencode/comments/1wz8gcl/i_tested_space_bunny_vs_mimo_v25_vs_longcat_25_on/)).
- Meituan has published no official benchmark table; Tau3, GDPval, ClawEval, MCP-Atlas: no verified score found.

Reasoning / knowledge:

- GPQA, HLE, LCR/MLCR, CritPt, AA Index, Omniscience: no verified public score found.

Coding:

- No verified SWE-bench, LiveCodeBench, SciCode, Vibe Code Bench, or DeepSWE score found.

Long context:

- No verified MRCR/RULER score found; 1M is an advertised capacity rather than measured retrieval quality.

### Normalized scores (1–100)

- **Tool use: 71/100.** The only reproducible public run found scored 48.7% pass@1 on Terminal-Bench 2.1; native tools help, but evidence is narrow and community-run.
- **Reasoning: 66/100.** Reasoning is supported, but absence of numeric science/knowledge evidence imposes a conservative cap.
- **Context window: 91/100.** 1M input and 131K output are excellent specifications, reduced for zero full-window retrieval evidence.
- **Multimodal: 70/100.** Text and image input are supported with text output, but no vision benchmark is published.
- **Coding: 69/100.** Coding is a stated focus and Terminal-Bench supplies indirect evidence, but no repository coding benchmark exists.
- **Cost efficiency: 97/100.** Promotional $0.30/$1.20 plus tiny cache-read cost is outstanding, though explicitly temporary.
- **Overall Score: 73/100.** Half-up mean of the five non-cost dimensions; best for inexpensive preview experimentation, not benchmark-critical production selection.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using provider records and the only numeric public exact-model run found; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
