# MiniMax M3 — findings by Space Bunny Alpha

- Source: MiniMax (`MiniMax-M3`; open-weight and API)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight, natively multimodal coding and agent model with 1M context, long-horizon execution, and MiniMax Sparse Attention.
- **Provider / access:** MiniMax API (`https://api.minimax.io/v1/text/chatcompletion_v2`, model `MiniMax-M3`); Hugging Face weights `MiniMaxAI/MiniMax-M3`; available through 16 API providers per Artificial Analysis. OpenAI-compatible and local deployment paths are supported by the model ecosystem.
- **Release / knowledge:** Artificial Analysis lists 2026-06-01; Hugging Face metadata shows repository creation on 2026-06-02. The model card's system prompt states a January 2026 knowledge cutoff.
- **IDs:** `MiniMax-M3`; Hugging Face `MiniMaxAI/MiniMax-M3`.
- **Context window:** Up to 1M tokens, with a guaranteed minimum of 512K stated by MiniMax. Artificial Analysis independently confirms 1M (~1500 A4 pages).
- **Modalities:** Text, image, and **video** input; text output; reasoning, tool calls, native multimodal understanding, and long-video workflows supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $0.30 per 1M input and $1.20 per 1M output tokens with an 80% cache discount and a $0.22 blended 7:2:1 rate — **unchanged** from 2026-09-24. MiniMax's own model page says pricing remains unchanged, but the public token table was not visible in the fetched text.
- **Architecture:** Open-weights MoE, **428B total parameters and 23B active** (Artificial Analysis, re-verified 2026-09-29 — the 2026-09-24 report recorded these as "approximately" and only via MiniMax sources). MiniMax Community License with commercial-use restrictions.
- **Lifecycle:** No deprecation, discontinuation, or successor notice found on 2026-09-29. Not flagged on Artificial Analysis.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **83.5** (MiniMax official model page)
- CUDA kernel optimization: **147 iterations**, **1,959 tool calls**, hardware utilization from **7.6% to 71.3%**, and **9.4x speedup** (MiniMax official model page; task-specific experiment)
- Artificial Analysis Intelligence Index v4.3.2: **29/100**, rank **#18/116** (Artificial Analysis, accessed 2026-09-29). Index unchanged; **rank changed from #16/113** purely from field growth, and AA now notes the model as "amongst the leading models in intelligence" among comparable open-weight models (median 18).
- Output speed: **115.3 tokens/s**; time to first token **1.50s** (Artificial Analysis, accessed 2026-09-29). These measurements were absent from the 2026-09-24 report and are new here; AA ranks speed **#14/116** and TTFT as better than the 2.01s class median.
- PostTrainBench: **37.1**, rank **#3 overall** (MiniMax official model page; relative task result)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **29** (v4.3.2, unchanged)
- Verbosity: **120M** output tokens on the Intelligence Index vs. a 140M median
- HLE, GPQA Diamond, LCR/MLCR, CritPt, AA-Omniscience, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **no verified public exact value found** in the reviewed official text
- SWE-bench Pro: **59%** (MiniMax Hugging Face model-card eval metadata)
- SkillsBench v1.1: **53%** with skills (Hugging Face model-card eval metadata)
- LHTB: **38.5%** (Hugging Face model-card eval metadata; leaderboard source)
- DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- MiniMax states a 1M-token context with a guaranteed minimum of 512K; the official model page describes long-range agent, coding, and long-video workloads. No independent retrieval-at-length score was found.

Sources consulted: [MiniMax M3 model page](https://www.minimax.io/models/text/m3), [MiniMax M3 Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M3), and [Artificial Analysis MiniMax M3](https://artificialanalysis.ai/models/minimax-m3), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 92/100.** Unchanged. BrowseComp 83.5, the 1,959-call CUDA optimization experiment, and AA Index 29 provide strong measured agent/tool evidence; exact Terminal-Bench, Tau, GDPval, and MCP values remain unavailable.
- **Reasoning: 80/100.** Unchanged. AA Index 29 is well above the compared open-weight median of 18, but exact GPQA, HLE, LCR, and hallucination values were not found.
- **Context window: 95/100.** Unchanged. MiniMax states 1M context with a 512K guaranteed minimum, matching Artificial Analysis; no retrieval-at-length score was published.
- **Multimodal: 95/100.** Unchanged. Official sources and Artificial Analysis both verify image and video input, long-video understanding, and text output.
- **Coding: 88/100.** Unchanged. Official long-horizon coding experiments, SWE-bench Pro 59%, and the 9.4x CUDA optimization result support strong coding.
- **Cost efficiency: 92/100.** Unchanged. $0.30/$1.20 with an 80% cache discount and a $0.51 cost per Intelligence Index task are strong; open weights broaden deployment options, while license and infrastructure costs remain relevant.
- **Overall Score: 90.0/100.** (92 + 80 + 95 + 95 + 88) / 5 = 90.0. Overall is unchanged. The auditable deltas this cycle are rank #16/113 → #18/116 at an unchanged index of 29, newly recorded throughput (115.3 t/s, TTFT 1.50s), and parameter counts now confirmed as 428B/23B. Best fit: open-weight multimodal coding agents, long-running automation, and self-hosted or low-cost API deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of MiniMax's official model page, Hugging Face model card, and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
