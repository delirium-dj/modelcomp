# Kimi K3 — findings by Mimo V2.6 Flash

- Source: Moonshot AI/`kimi-k3`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter open-weight MoE flagship (July 2026) with native vision, 1M context, and frontier coding/agentic scores — first open 3T-class model; premium $3/$15 API pricing. Distinct from K2.8 Preview (mid-tier) and K2.6.
- **Provider / access:** Kimi API (OpenAI-compatible Chat Completions, `kimi-k3`), Kimi.com / Work / Code, OpenRouter, Cloudflare Workers AI; weights on Hugging Face (custom Kimi K3 License, shipped 2026-07-27). **No OpenCode Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** 2026-07-16 hosted; weights 2026-07-27; knowledge cutoff not published in sources reviewed.
- **IDs:** `kimi-k3` (Moonshot API); site meta `moonshotai/kimi-k3`.
- **Context window:** 1,048,576 tokens in; max output 131,072 default up to 1,048,576 (Benchgen / Cloudflare docs).
- **Modalities:** text, image in (native vision); text out; thinking always on (`reasoning_effort` max at launch, later low/high/max); tool calls; JSON mode via API.
- **Pricing (as of 2026-09-23):** $3.00 cache-miss in / $0.30 cache-hit in / $15.00 out per 1M (flat across context). Paid; no free tier.
- **Architecture:** 2.8T total / ~104B active (16 of 896 experts + shared); Stable LatentMoE + Kimi Delta Attention + Attention Residuals; MXFP4/MXFP8 QAT; open weights (custom license — internal use free, large MaaS/revenue triggers gated).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot / Benchgen; Kimi Code harness — near GPT-5.6 Sol 88.8)
- MCP Atlas: **84.2%** (Moonshot table)
- GDPval-AA v2: **1668–1686 Elo** (Moonshot / AA-derived; Fable 5 1760)
- BrowseComp: **91.2%** (Moonshot; 90.4 at 1M no compaction)
- Automation Bench: **30.8%** (Moonshot)
- SWE Marathon: **42.0%** (Moonshot, Claude Code harness)
- Tau3 / Toolathlon / OSWorld: **no verified public score found** in rows reviewed
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot)
- HLE: **43.5%** full / **56.0%** with tools (Moonshot / Turiloop)
- AA Intelligence Index: **57** (#3–4 overall at launch, top open-weight; later 59.7 on AA feed) — kie.ai / whatllm / Turiloop
- AA Coding Index: **76.2**; Agentic Index **54.3** (whatllm, 2026-08-28)
- LCR / CritPt / Omniscience: **no verified public score found**
- Arena Frontend Coding: **#1 at 1679** launch (independent blind votes)

Coding:

- DeepSWE 1.1: **67.5** (Moonshot; leaderboard 67.3 mini-SWE-agent)
- FrontierSWE: **81.2** (Fable 5 86.6 leads)
- Program Bench: **77.8** (Moonshot / Vals)
- Terminal-Bench 2.1: **88.3%**
- SWE-bench Verified: **no verified public score found** in these rows (K3 published DeepSWE/FrontierSWE/SWE-Marathon instead)
- LiveCodeBench / SciCode / Vibe: **no verified public score found**

Long context:

- 1,048,576 window documented; MRCR / RULER retrieval quality: **no verified public score found**

Multimodal:

- MMMU-Pro: **81.6%**; OmniDocBench: **91.1** (Moonshot)
- Native image in; video/audio: **no verified public score found** (not claimed)

### Normalized scores (1–100)

- **Tool use: 94/100.** TB2.1 88.3, MCP Atlas 84.2, GDPval-AA v2 ~1668, BrowseComp 91.2 — near-top agentic/tool stack; capped by AutomationBench ~31 and no public Tau3 row.
- **Reasoning: 93/100.** GPQA 93.5, HLE 43.5/56 tools, AA Index 57 (frontier open-weight leader); capped by HLE still below top Fable/Mythos-class 60%+ and verbose/slow serving notes from AA.
- **Context window: 96/100.** Full 1,048,576 in/out capacity (≥1M tier); no public MRCR % to claim the retrieval-verified 100.
- **Multimodal: 80/100.** Native vision with MMMU-Pro 81.6 and OmniDocBench 91.1 (strong image/doc); no audio/video in/out → not 90+.
- **Coding: 94/100.** TB2.1 88.3, DeepSWE 67.5, Program Bench 77.8, FrontierSWE 81.2, Arena #1 frontend — frontier coding/agent; capped slightly by no public SWE-V row and trails Fable 5/Sol on DeepSWE/FrontierSWE.
- **Cost efficiency: 60/100.** $3/$15 hits the $3/$15≈60 anchor exactly; 90% cache-hit discount ($0.30) and flat 1M pricing soften agentic bills but verbose thinking raises per-task cost (~$0.94/AA task).
- **Overall Score: 91/100.** Mean of Tool 94 + Reasoning 93 + Context 96 + Multimodal 80 + Coding 94 = 457/5 = 91.4 → **91** (best-fit: open-weight frontier for long-horizon coding and 1M-context vision work when $3/$15 budget and supernode/API access fit).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Moonshot K3 tech blog, Benchgen, whatllm, kie.ai, Turiloop, Graphify); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
