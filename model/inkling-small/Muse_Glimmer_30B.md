# Inkling Small — findings by Muse Glimmer 30B

- Source: Thinking Machines Lab (`thinkingmachines/Inkling-Small`; OpenCode Zen `opencode/inkling-small`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab’s open-weight 276B total / 12B active MoE hybrid-reasoning model with native text, image and audio input for coding and agentic workflows. Released as the compact sibling of Inkling with up to 1M context claimed and variable thinking effort.
- **Provider / access:** Open weights Apache 2.0 on Hugging Face `thinkingmachines/Inkling-Small`. Hosted OpenCode Zen `opencode/inkling-small`, OpenRouter `thinkingmachines/inkling-small`, DeepInfra, Together AI, etc. Chat Completions compatible; no Responses-API route found.
- **Release / knowledge:** Released 2026-07-30 per Thinking Machines news. Knowledge cutoff not published.
- **IDs:** `opencode/inkling-small` (Zen); `thinkingmachines/Inkling-Small` (HF); `thinkingmachines/inkling-small` (OpenRouter/Together)
- **Context window:** Meta `1,000,000 total` claimed. Vendor advertises up to 1M tokens; hosted providers list 524,288 usable on DeepInfra/OpenRouter as of 2026-10-20. No verified MRCR/RULER retrieval number published.
- **Modalities:** Text in/out; image input and audio input. Reasoning yes with variable thinking effort. Tool calling yes. JSON mode yes on most hosts. No video input on hosted routes despite training data mention.
- **Pricing (as of 2026-10-20):** Open weights free self-host per meta.json. Hosted list ~$0.50 in / $1.20 out / $0.10 cached per 1M on OpenCode Zen; DeepInfra/OpenRouter $0.45 in / $1.20 out. No Free Zen tier.
- **Architecture:** 276B total parameters, 12B active per token, 42-layer decoder-only sparse MoE (6 of 256 experts + 2 shared per token, hybrid local/global attention). BF16/NVFP4 numerics.

### Raw benchmarks found

All figures below are vendor-published from the official Inkling-Small model card / Hugging Face eval table and the 2026-07-30 Thinking Machines release post, mirrored by DeepInfra. No independent third-party agentic leaderboard run was found for this ID.

Agent / tool use:

- Terminal-Bench 2.1 (best harness): **64.7%** (Thinking Machines internal harness; vendor notes web-search contamination scored 0)
- Tau3-Banking: **15.5%**
- GDPval-AA v2: **1269** Elo
- MCP Atlas public / all: **79.6% / 79.2%**
- Toolathlon Verified: **54.4%**
- BrowseComp with context management: **77.4%**
- AA-Briefcase: **917**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE text only: **31.6%**; HLE with tools: **47.8%**
- AIME 2026: **95.5%**
- HMMT Feb 2026: **90.2%**
- CritPt: **8.3%**
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%**
- Artificial Analysis Intelligence Index v4.1: **40.0%**
- SimpleQA Verified: **20.6%**; AA Omniscience index: **-9.0**
- Global-MMLU-Lite: **86.7%**
- IFBench: **82.2%**

Coding:

- SWE-bench Verified: **80.2%** (vendor bash-only harness)
- SWE-bench Pro public: **55.9%**
- Terminal-Bench 2.1: **64.7%**
- SciCode: **48.7%**
- LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found for this ID

Long context:

- No long-context retrieval reported. Vendor publishes 1M window claim and hybrid local/global attention but no MRCR / RULER / GraphWalks number for Inkling-Small. Hosted capacity observed at 524,288 tokens.

Multimodal vendor-reported:

- MMMU Pro Standard 10: **74.0%**
- CharXiv RQ original / with python: **77.4% / 81.3%**
- Audio MC: **54.9%**
- MMAU: **77.0%**
- VoiceBench: **90.1%**

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 79.6/79.2% and BrowseComp 77.4% show strong structured orchestration, Terminal-Bench 2.1 64.7% sits above mid-band, GDPval-AA 1269 is mid-high. Capped by Tau3-Banking 15.5% and AA-Briefcase 917, indicating weak long policy conversation holding.
- **Reasoning: 76/100.** GPQA Diamond 89.5% and AIME 95.5%/HMMT 90.2% reach near-frontier math, HLE-with-tools 47.8% crosses the 40% threshold. Capped by HLE text-only 31.6%, CritPt 8.3% and SimpleQA 20.6% with Omniscience -9.0 showing poor factuality under pressure.
- **Context window: 92/100.** ≥1M claimed per meta.json and vendor, but no ≥98% retrieval measurement at 512K+. Hosted limits at 524,288 on major providers pull the score down from the 95-100 band.
- **Multimodal: 90/100.** Native text+image+audio in / text out qualifies for 90-100 band. VoiceBench 90.1% and MMAU 77.0% support audio strength; MMMU Pro 74.0% and CharXiv 77.4/81.3% support vision. Audio MC 54.9% and lack of video/PDF input keep it below 95.
- **Coding: 78/100.** SWE-bench Verified 80.2% is top-decile open-weights and beats Inkling’s 77.6% on the vendor harness. SWE-Pro 55.9%, Terminal-Bench 64.7% and SciCode 48.7% are solid upper-mid. No independent SWE verification and SciCode below 55% caps the score.
- **Cost efficiency: 100/100.** Open weights free self-host per meta.json. Hosted pricing is paid; self-host tier is $0.
- **Overall Score: 82/100.** Half-up mean of 72 / 76 / 92 / 90 / 78. Best fit: cheap, genuinely multimodal 1M-context workhorse for long-repository coding and document/audio reasoning, weakest on hard tool policy tasks and factual recall.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; vendor model card on Hugging Face `thinkingmachines/Inkling-Small`, Thinking Machines news 2026-07-30, meta.json for basics, OpenCode Zen pricing/context. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
