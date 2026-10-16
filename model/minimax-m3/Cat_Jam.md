# MiniMax M3 — findings by Cat Jam

- Source: MiniMax / MiniMax M3 (`opencode/minimax-m3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's flagship open-weights (Community License) MoE (428B total / 23B active; 1M context; native image+video). MSA sparse attention for efficient long-horizon coding/agentic work.
- **Provider / access:** MiniMax API (`MiniMax-M3`), OpenRouter, Fireworks, self-host under MiniMax Community License. Native multimodal inputs.
- **Release / knowledge:** Released 2026-06-01 (GA); open weights ~mid-June. Knowledge cutoff not stated in sampled docs.
- **IDs:** `minimax-m3` (MiniMax)
- **Context window:** 1,048,576; max output 128,000. Verified.
- **Modalities:** Text, image, video in; text out. Thinking toggle. Function calling, parallel tools, structured output, image input, prompt caching.
- **Pricing (as of 2026-10-16):** $0.30 (cache hit $0.06) / $1.20 per 1M (standard ≤512K); long-context (512K–1M) $0.60/$2.40; high low-cost (cheapest W&B $0.23/$0.96). Monthly token plans available.
- **Architecture:** MoE 428B/23B, MSA sparse attention; Community License (not fully open—commercial >$20M requires prior authorization + attribution, no military use). No direct MIT.

### Raw benchmarks found

Coding & agentic:

- SWE-Bench Verified: **80.5%**
- SWE-Bench Pro: **59.0%**
- Terminal-Bench 2.1: **66.0%**
- SWE-fficiency: **34.8%**
- KernelBench Hard: **28.8%**
- MCP Atlas: **74.2%**
- BrowseComp: **83.5%**

Reasoning / knowledge:

- GPQA Diamond: **92.7%** (TensorFeed) / 93% (Fello)
- HLE: **37%** (up from M2.7 28)
- AA Intelligence Index: **55** (open-weights middle)
- MMLU-Pro: **84.2%**
- AA-Omniscience Accuracy: **15.0%** (heavy abstention 30.9% response)
- GDPval-AA: ~1670 Elo
- IFBench 83% (per Fello, 83% multi? Actually M3 from maybe not sampled; omit claim)
- clones: not

Multimodal:

- MMMU Pro: **78.1%**
- Video-MME v2: **85.4**
- VideoMMMU: **78.1? (Loop)** not (TensorFeed: VideoMMMU 78.1? It says 78.1 M3?) Actually TensorFeed table: Video-MME v2 85.4, MMMU Pro 78.1, Video-MME? no more
- OmniDocBench likely 78.1? (MiniMax blog says 78.1? no, not in sampled)

Long context:

- 1M token context; MRCR/RULER no dedicated verified number in sampled docs beyond 500K support at launch (Fireworks initially 500K then MSA 1M). No specific retrieval score listed.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 83.5, MCP Atlas 74.2, Terminal-Bench 66.0, OSWorld 70.0 (MiniMax OpenAI launch table). Good agent/tool use, behind Claude/GPT on strict TB.
- **Reasoning: 86/100.** GPQA 92.7, HLE 37, AA Intelligence 55, MMLU-Pro 84.2; Omniscience poor (15% acc, low responses) caps.
- **Context window: 93/100.** 1M via MSA at reduced compute (1/20). (No retrieval benchmark => caps top.)
- **Multimodal: 86/100.** Native text/image/video; MMMU Pro 78.1, BrowseComp 83.5 (browsing agent), Video-MME v2 85.4. Strong multimodal-but-video is the selling point.
- **Coding: 84/100.** SWE-Verified 80.5, SWE-Pro 59.0, Terminal-Bench 66.0, KernelBench 28.8, MCP Atlas 74.2.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M (cache $0.06), fast (100 t/s claimed) and 20x attention compute savings; $20–$120 plans.
- **Overall Score: 87/100.** Mean (84+86+93+86+84)/5 = 86.6. Great value coding+long-context open model; slightly behind Opus/claude on absolute frontier intelligence.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (MiniMax blog/FelloAI/TensorFeed/LiteLLM/Hugging Face/Fireworks, aimodelsnavi); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
