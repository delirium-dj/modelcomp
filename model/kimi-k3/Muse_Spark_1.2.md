# Kimi K3 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Kimi (Moonshot) open 2.8T/104B-active MoE with Delta Attention + Attention Residuals, 1M context, native vision, first open 3T-class frontier for long-horizon coding and knowledge work.
- **Provider / access:** Kimi API `moonshot/kimi-k3` (max/low), Fireworks, Together AI, Modal, Hugging Face `moonshotai/Kimi-K3`
- **Release / knowledge:** 2026-07-16 (max release); knowledge cutoff 2026-05
- **IDs:** `moonshot/kimi-k3` (max/low variants; no Zen Free ID — open weights but paid API)
- **Context window:** 1,048,576 (1M) — verified via Kimi tech blog and arxiv 2607.24653
- **Modalities:** Text, image, video in; text out; reasoning yes (max effort); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $3.00 in / $15.00 out per 1M (max/low); cache 90% discount; $2.00 per AA Intelligence task (max)
- **Architecture:** 2.8T params, 104B active, 896 routed experts (16 active), 56× sparsity, KDA + NoPE MLA, MIT/Kimi K3 License

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **Kimi Code harness evaluation** (Kimi tech blog — best across harnesses vs GLM-5.2 Claude Code; vs Fable 5 Terminus 2, GPT-5.6 Sol Codex; K3 attains 67.3 with mini-SWE-agent on DeepSWE but TB numeric not isolated in public excerpt)
- Program Bench: **Kimi Code harness** (Vals — K3 evaluated with Kimi Code)
- SWE Marathon: **Kimi Code harness** (vs Opus 4.8, Fable 5 Claude Code; Fable 5 fell back 35%)
- Tau3-Banking: **included in AA Intelligence Index** (AA v4.1.1)
- GDPval-AA: **included in AA Index**
- Claw-Eval: **no verified public score found**
- Vals AI: **Kimi K3 evaluations across Kimi Code**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Requesty via AA Coding Index — 93.5% GPQA)
- Artificial Analysis Intelligence Index: **60 (max)** (AA Spanish page — vs median 26 open weights; 39 low, 44 max previous estimate 50)
- Intelligence Index (estimated): **44 max / 34 low** (AA releases page — methodology v4.3)
- Omniscience / LCR / CritPt: **included in AA Index v4.1.1**

Coding:

- DeepSWE v1.1 (mini-SWE-agent): **67.3** (Kimi tech blog — K3 with mini harness; vs GLM-5.2 blog; official DeepSWE leaderboard)
- LiveCodeBench / SciCode / Terminal-Bench composite Coding Index (AA): **76.2%** (Requesty/AA — vs 59.7% Intelligence Index)
- FrontierSWE: **Kimi Code vs GPT-5.6 Sol Codex** (Kimi tech blog)
- SWE-bench Verified: **76.2% Coding Index proxy** (AA)
- LiveBench: **no verified public score found for K3** (proxied via AA Coding 76.2)

Long context:

- 1M context with KDA + Attention Residuals; hybrid NoPE MLA; 1M demonstrated for video editing (56 clips→teaser in 1-2 days) and game/3D world generation with screenshot refinement

### Normalized scores (1–100)

- **Tool use: 87/100.** Kimi Code harness across TB2.1/Program/SWE Marathon + AA Index 60 incorporating Tau3/GDPval/TB; capped by proprietary Fable/Sol still leading.
- **Reasoning: 88/100.** GPQA 93.5% + AA Index 60 + open-frontier leader but trails Fable 5/Sol per Kimi's own "trails strongest proprietary" note.
- **Context window: 98/100.** 1M native with KDA optimized for million-token scaling; just below 100 without MRCR ≥98%.
- **Multimodal: 75/100.** Text/image/video in (native vision) but no audio/PDF in listed; lacks audio-in for 90+.
- **Coding: 89/100.** DeepSWE 67.3 + Coding Index 76.2% + FrontierSWE; strong open leader but Sol/Fable still ahead.
- **Cost efficiency: 42/100.** $3/$15 paid open-weight API (expensive vs $2/6 Grok, $0.75 Flash); offset by open self-host savings.
- **Overall Score: 87/100.** Mean of five non-cost dims (87+88+98+75+89)/5=87.4 → 87; best-fit for open 3T frontier work where weights/portability matters.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Kimi tech blog, arxiv 2607.24653, Artificial Analysis v4.1.1, Requesty/AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
