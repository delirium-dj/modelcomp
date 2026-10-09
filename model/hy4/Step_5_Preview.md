# Hy4 preview — findings by Step 5 Preview

- Source: Tencent Hy / Hunyuan (`hy4-preview`, weights `tencent/Hy4-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview (Tencent Hy Team, formerly Hunyuan)
- **Short description:** Tencent's next-generation open-weight flagship (released 2026-08-28, Apache 2.0, BF16 + FP8 checkpoints) — a 770B-parameter MoE with 49B active per token, shipped "preview-first" like Hy3 before it. New from the ground up vs Hy3 (295B/21B): Gated DeepSeek Sparse Attention with IndexCache (cross-layer sparse index reuse), iHC identity Hyper-Connections with 4 residual streams, 256 routed experts (top-8) + 1 shared, a 1M-token context (up from 256K), and a native 10B MTP layer (0.7B active) for speculative decoding. Tencent claims "the largest generation-over-generation gain we've measured," putting it at the open-source frontier, with rough parity to GLM 5.3, Kimi K3 and DeepSeek V4 Pro on most rows; in Tencent's internal blind test, 163 experts rated it 2.99/4 on 203 engineering tasks vs GLM 5.3's 2.92 and Kimi K3's 2.94. Known preview limitations: overlong reasoning and over-verification.
- **Provider / access:** Open weights on Hugging Face / ModelScope / GitCode / CNB; day-0 vLLM and SGLang images; API at $0.834/$2.501 per M tokens via Tencent Cloud TokenHub, OpenRouter (DeepInfra, NovitaAI, SiliconFlow), Opper.
- **Release:** 2026-08-28.
- **Context window:** 1,048,576 tokens (1M; Tencent Cloud lists 960K max input, 64K max output).
- **Modalities:** Text in → text out (no vision or audio variant shipped); reasoning (default `high` effort, `no_think` option) and tool use with `hy_v4` parsers.
- **Pricing (as of 2026-10-09):** $0.834/M input, $2.501/M output, $0.042/M cache read (flat across Tencent Cloud, OpenRouter providers, Opper); Apache-2.0 weights free to self-host; free for two weeks in CodeBuddy/WorkBuddy.
- **Architecture:** 78 layers, hidden 6144, Gated DSA over MLA (q/kv compression 2048/512, 64 heads, 32-head indexer, top-2048), iHC residual, MoE 256+1 experts.

### Raw benchmarks found

Model-card benchmark appendix (highest reasoning setting; Hy3 preview in parentheses):

- SWE-bench Multilingual: **82.9%** (75.8); SWE-bench Pro: **65.7%** (57.9)
- Terminal-Bench 2.1: **85.4%** (70.8; Claude Code harness, 500 turns); DeepSWE: **64.3%** (28.0)
- CyberGym: **78.4%** (51.8); SkillsBench v1.1: **62.9%**
- Toolathlon-Verified: **74.1%** (56.2); MCP-Atlas public: **83.7%** (75.0)
- GDPval-AA V2: **1678 Elo** (1213)
- GPQA Diamond: **92.3%** (90.9); HLE (no tools, text-only): **43.4%** (34.4)
- MathArena Apex 2025: **74.2%** (38.7); BioMysteryBench: **71.3%**; CritPt: **16.9%** (4.9)
- SWE-Marathon: **31.9%** (vs Claude Opus 5's 50.0); ProgramBench: **17.5%** (vs Opus 5's 39.5)

Third-party:

- OpenRouter AutoExacto (provider routing): GPQA Diamond **89.1–90.7%** (auto-routing 90.5–90.7% across providers), TAU-Bench **73.8–75.8%** (auto-routing 70.7%)
- Throughput 15–42 tok/s and latency 1.68–11.25 s depending on provider (OpenRouter)
- Not yet listed on the Artificial Analysis Intelligence Index as of 2026-08-29

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP-Atlas public 83.7%, Toolathlon-Verified 74.1%, GDPval-AA V2 Elo 1678 and independent TAU-Bench ~73.8–75.8% (OpenRouter AutoExacto) sit at the frontier band (MCP-Atlas ~75+, Toolathlon ~50+, GDPval ~1750 is the only miss at 1678) — the best agentic profile of any open-weights model at its size.
- **Reasoning: 88/100.** GPQA Diamond 92.3% (independently reproduced at 89–91% across OpenRouter providers), HLE 43.4% no-tools and MathArena Apex 74.2% are all in the frontier band (GPQA 90%+, HLE 40%+); CritPt 16.9% and no ARC-AGI figure hold it just below the top.
- **Context window: 92/100.** A 1M-token window (up from Hy3's 256K) built on sparse attention designed for it — the ≥1M band worth 95–100, docked because Tencent publishes no MRCR/RULER/needle-retrieval curve for this model, so retrieval quality at 512K+ is unevidenced.
- **Multimodal: 12/100.** Text-only (HF pipeline `text-generation`, OpenRouter text→text) — the methodology's text-only band (10–20); no vision or audio variant has shipped.
- **Coding: 86/100.** Terminal-Bench 2.1 85.4% (Claude Code harness, 500 turns), SWE-bench Multilingual 82.9%, SWE-bench Pro 65.7%, DeepSWE 64.3% and CyberGym 78.4% are near-frontier coding — clearly the best open model and only a few points behind Claude Opus 5 on the marquee agentic coding evals; SWE-Marathon 31.9% and ProgramBench 17.5% (vs Opus 5's 50.0/39.5) show where the gap remains.
- **Cost efficiency: 90/100.** $0.834/$2.501 per million tokens with $0.042 cache reads and Apache-2.0 weights free to self-host (the methodology's ~$0.6/$2.2 ≈ 92 / ~$1.25/$4.25 ≈ 88 range); through provider routing and the MTP drafter, frontier-class agentic coding at well under half of Opus pricing.
- **Overall Score: 72/100.** Best-fit recommendation: the strongest open-weights agentic coder of late 2026 — frontier-class tool use and coding at ~$0.83/$2.50, preview quirks (overlong reasoning, over-verification) included.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Tencent Hy release page, Hugging Face model card + benchmark appendix + eval-results widget, OpenRouter provider benchmarks, Lab Index and Tencent Cloud analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy4_GA.md`, using the same headings.
