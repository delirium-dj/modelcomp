# Kimi K2.7 Code — findings by Step 5 Preview

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's first dedicated coding model (released 2026-06-12) — a coding-focused fine-tune of Kimi K2.6 on the same 1T/32B-active MoE backbone, pitched as the budget answer to Fable 5's $10/$50 rate card. Independently verified as the **#1 open-weight model on SWE-bench Verified (78.2%) and Terminal-Bench 2.1 (67.04%)** (Vals AI), and the first open-weights coding model to beat Claude Opus 4.8 on MCPMark Verified (81.1% vs 76.4%). The release's other headline is efficiency: ~30% fewer thinking tokens than K2.6 on the same tasks.
- **Provider / access:** Moonshot API (`kimi-k2.7-code`, Kimi Code CLI); open weights `moonshotai/Kimi-K2.7-Code` on Hugging Face (Modified MIT — credit required above ~100M MAU / ~$20M monthly revenue); Cloudflare Workers AI, SiliconFlow ($0.86/$3.80) and other hosts; high-speed variant `kimi-k2.7-code-highspeed` (~180 tok/s, up to 260 in short context).
- **Release / knowledge:** 2026-06-12. Knowledge cutoff not disclosed (K2.6 lineage).
- **IDs:** `kimi-k2.7-code` (Moonshot/Cloudflare), `kimi-k2.7-code-highspeed` (fast tier).
- **Context window:** 262,144 tokens (256K), with automatic context compression for long-horizon sessions.
- **Modalities:** Text, image and video in → text out (400M MoonViT encoder); **thinking mode mandatory** (disabling returns an API error); fixed sampling (temperature 1.0, top_p 0.95); default max output 32,768.
- **Pricing (as of 2026-10-09):** $0.95 / MTok input, $0.19 cached, $4.00 output — roughly a twelfth of Fable 5's token price; native INT4 weights (~595GB on disk) for self-hosting via vLLM/SGLang/KTransformers.
- **Architecture:** MoE, 1T total / 32B active (384 experts, 8 selected + 1 shared, 61 layers, MLA, SwiGLU, 160K vocab).

### Raw benchmarks found

Coding — independent (Vals AI):

- SWE-bench Verified: **78.20%** — **#1 open-weight**; matches Claude Opus 4.6 (Thinking) and GPT-5.4 (xhigh), edges GPT-5.3 Codex
- Terminal-Bench 2.1: **67.04%** — **#1 open-weight**
- Vibe Code Bench: **47.21%** — #3 open-weight
- LiveCodeBench: **82.05%** — #8 open-weight

Coding — vendor table (Kimi Code CLI vs GPT-5.5 in Codex xhigh, Opus 4.8 in Claude Code xhigh):

- Kimi Code Bench v2 (in-house, 10+ languages, production tech stack): **62.0** (K2.6 50.9, GPT-5.5 69.0, Opus 4.8 67.4)
- Program Bench (rebuild from binary + docs, 248K behavioral tests): **53.6** (K2.6 48.3, GPT-5.5 69.1, Opus 4.8 63.8)
- MLS Bench Lite (multi-language): **35.1** (K2.6 26.7, GPT-5.5 35.5, Opus 4.8 42.8)

Agentic:

- MCPMark Verified: **81.1%** (K2.6 72.8, Opus 4.8 76.4, GPT-5.5 92.9) — first open-weights model above Opus 4.8 here
- MCP Atlas: **76.0%** (K2.6 69.4, GPT-5.5 79.4, Opus 4.8 81.3)
- Kimi Claw 24/7 Bench (in-house): **46.9%** (K2.6 42.9, GPT-5.5 52.8, Opus 4.8 50.4)
- Terminal-Bench 4.0: **1.0%** (AA — the new hard suite is far from solved)

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA) / 87.9% (Model Beat); HLE: **35%** (AA)
- AIME 2024/2025: **95.6%** (Epoch); SciCode: **47.8%** (AA); IFBench: **63.1%** (AA); CritPt: **10%** (AA)
- AA-LCR: **79.3%** (AA); τ²-Bench: **90.1%** (AA); Artificial Analysis Intelligence Index: 25.8–41.9 (page-version dependent)

### Normalized scores (1–100)

- **Tool use: 68/100.** MCPMark Verified 81.1% (above Opus 4.8), MCP Atlas 76.0% and Terminal-Bench 2.1 67.04% (AA) are solidly mid-frontier agentic evidence; capped by the Kimi Claw 24/7 Bench at 46.9%, Terminal-Bench Hard 44.7%, Terminal-Bench 4.0 at 1.0% and two of the three headline agentic benchmarks being Moonshot's own.
- **Reasoning: 76/100.** GPQA 89.6%, AIME 95.6%, τ²-Bench 90.1% and AA-LCR 79.3% are strong for a coding-tuned model; capped by HLE 35%, SciCode 47.8%, CritPt 10% and the AA Intelligence Index at 25.8–41.9 — the coding fine-tune trades general reasoning depth for task completion.
- **Context window: 76/100.** 262,144-token window sits in the 200K–500K band with automatic compression for long-horizon sessions; AA-LCR 79.3% supports retention, but no MRCR/RULER figure exists and the 1M-window models in this comparison out-rank it.
- **Multimodal: 76/100.** Native text + image + video in → text out (MoonViT) is the 75–90 band; no MMMU-Pro/CharXiv number is published for K2.7 Code specifically, so it sits at the bottom of the band on the inherited K2.6 vision evidence.
- **Coding: 76/100.** SWE-bench Verified 78.2% and Terminal-Bench 2.1 67.04% are both #1 open-weight on Vals' independent harnesses, with Vibe Code Bench 47.21% (#3 open) and LiveCodeBench 82.05%; capped by Program Bench 53.6% (vs GPT-5.5's 69.1%), MLS Bench Lite 35.1% and Terminal-Bench 4.0 at 1.0% — clearly behind the closed frontier on the hardest coding suites.
- **Cost efficiency: 89/100.** $0.95/$4.00 per MTok with $0.19 cache hits maps just above the methodology's ~$1.25/$4.25 ≈ 88 tier, and the ~30% reasoning-token cut compounds with the low rate; Modified MIT self-hosting (native INT4) is the real cost story.
- **Overall Score: 74/100.** Best-fit recommendation: the leading open-weight coding model for production agentic work — #1 open SWE-bench Verified and Terminal-Bench 2.1 at ~1/12th of Fable 5's token price; route the hardest long-horizon coding and TB4.0-grade terminal work to a closed frontier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Moonshot HF model card + Kimi platform docs, Vals AI, Artificial Analysis, BenchSift, Dataconomy, Handy AI, MarkTechPost, AI/TLDR); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7.md`, using the same headings.
