# Kimi K3 — findings by GLM 5.2 Coding

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot's flagship, released 2026-07-16 — the world's first open 3T-class model (2.8T params, Stable LatentMoE activating 16/896 experts) with native vision and 1M context. Self-assessed: "frontier-level... still trails Claude Fable 5 and GPT 5.6 Sol." Built on Kimi Delta Attention + Attention Residuals (~2.5x scaling efficiency vs K2), quantization-aware from SFT onward (MXFP4 weights / MXFP8 activations), recommended on 64+ accelerator supernodes. Headline case studies: a from-scratch GPU compiler (MiniTriton) rivaling Triton, and a working chip for its own nano-model (48h autonomous run, 100 MHz, 1.46M cells).

- **Provider / access:** Moonshot Kimi API ($3/$15, $0.30 cache-hit — Mooncake disaggregated inference, >90% cache hit in coding); 5 providers tracked on LLM Stats (DeepInfra cheapest $2.85/$14.25/1M out, Fireworks/Novita/Together at $3/$15, all 1M/1M); Kimi.com, Kimi Work (desktop 3.1.0+), Kimi Code (terminal), mobile apps (iOS/Android/HarmonyOS), Kimi Enterprise. Weights: HuggingFace moonshotai/Kimi-K3 (full weights released 2026-07-27 per launch post); vLLM KDA prefix-caching contribution upstreamed.
- **Release / knowledge:** 2026-07-16 (weights 2026-07-27); knowledge cutoff not stated in launch post.
- **IDs:** `moonshotai/Kimi-K3` (HF); `kimi-k3` API. License: Kimi K3 License — open-weights (use/modification/distribution/sale/fine-tune OK); >$20M/yr MaaS revenue needs a separate Moonshot agreement; very-large products must show attribution.
- **Context window:** 1M in / **1M out** across all 5 providers (1M/1M — 8x the flagship-standard 128K).
- **Modalities:** native vision (text + image in); text out; "vision in the loop" (iterate code against live screenshots — game dev, frontend, CAD); video understanding within native multimodal claims (edited own teaser from 56 clips, motion design, 3B1B-style explainers). Launch default: **max thinking effort**, low/high modes later.
- **Pricing (as of 2026-10-09):** $3.00 / $15.00 / $0.30 cache-hit per 1M (Moonshot); DeepInfra $2.85/$14.25/$0.285. TTFT p95 / output p5 unmeasured in LLM Stats window.
- **Architecture:** 2.8T MoE (896 experts / 16 active), KDA + AttnRes, SiTU + Gated MLA, Quantile Balancing + Per-Head Muon optimizers, MXFP4/MXFP8 QAT, balanced expert-parallel (static shapes, no host sync).

### Raw benchmarks found

> Primary: Kimi K3 launch post full-table notes (2026-07-16, vendor; all K3 results at reasoning effort max, temp 1.0, top-p 1.0; harnesses per-benchmark: Kimi Code / Claude Code / Codex; competitor scores cited from leaderboards). The numeric "Full Benchmark Table" itself is an image — only prose-verified numbers logged below; footnote methodology is unusually rigorous (harness + calibration + fallback disclosure).

Coding (harness notes from footnotes):

- DeepSWE v1.1: **67.3** (Kimi Code harness; official leaderboard also lists 67.3 with mini-SWE-agent) — vs Fable 5/Opus 4.8/Sol per leaderboard (image-gated; frontier cluster 70–77.9).
- Terminal-Bench 2.1: evaluated with Kimi Code (image-gated); best-across-harness comparator method disclosed (GLM-5.2 via Claude Code, Opus 4.8/Fable 5 via Terminus 2, GPT 5.5/Sol via Codex).
- ProgramBench: Kimi Code harness (image-gated).
- SWE Marathon v1.1 (H20-calibrated): evaluated Claude Code harness; Fable 5 hit fallbacks on 35% of tasks (disclosed — may depress its score).
- FrontierSWE: Kimi Code harness; dominance recomputed via official script as of 2026-07-16.
- PostTrainBench: max effort, 3 runs on H20 (vs official H100) — hardware caveat disclosed.
- MLS Bench Lite / KCB 2.0: max effort; GPT-5.6 Sol's cyber guard triggered on 10% of KCB tasks (disclosed).

Productivity / agentic (footnote methodology):

- OfficeQA Pro: entire PDF corpus rendered as images, no machine-readable text — a genuinely vision-native document benchmark.
- MCP Atlas: 500-task public subset, 100-turn limit, Gemini 3.1 Pro as judge.
- AutomationBench: 600-task public subset, official GitHub setup.
- BrowseComp: **90.4** with 1M context and NO context management (Claude cards' 300K context-compaction strategy adopted for the headline table number; both configs disclosed) — deep-research browsing strength.
- GDPval-AA / AA-Briefcase / APEX-Agents: cited from Artificial Analysis (image-gated rows).

Multimodal:

- MMMU-Pro (official protocol), ZeroBench (5 runs), PerceptionBench (Kimi's own atomic-visual benchmark), 3-run averages — image-gated values.

Verified case studies (prose, not benchmark):

- Kernel optimization: competitive with Fable 5 (with fallback), substantially beats Opus 4.8 / GPT 5.6 Sol / GPT 5.5 in a 24h 4-task sandbox (KDA/AttnRes/MLA kernels, Hopper + alternative-vendor GPGPU).
- MiniTriton: built a Triton-like GPU compiler (MLIR tile-IR, PTX codegen) from scratch — par-or-better vs Triton/torch.compile on rooflines; sustains end-to-end nanoGPT training with stable convergence.
- Chip design: 48h autonomous run built a verified chip for K3's own nano-model (Nangate 45nm, 4 mm², 100 MHz timing closure, 8,700 tok/s decode sim, 1.46M cells, INT4 MAC array) using open-source EDA.
- I–Love–Q astrophysics: ~2h to reproduce what takes an experienced researcher 1–2 weeks (20+ papers cross-validated, 300+ EOS, 3,000+ lines, errors found in published formulas, interactive dashboard).
- GWTC-5: 391 gravitational-wave events analyzed with 20+ concurrent subagents.

Limitations (vendor-disclosed):

- Thinking-history sensitivity: harness must pass back full historical thinking or quality destabilizes; avoid mid-session model switches.
- Excessive proactiveness: makes unexpected decisions on minor issues/ambiguous intent — impose explicit constraints via system prompt / AGENTS.md.
- Own admission: "noticeable gap in user experience compared with Claude Fable 5 and GPT 5.6 Sol."

Long context:

- 1M in / 1M out verified across 5 providers; no MRCR/RULER row — no retrieval score found (BrowseComp 90.4 no-compaction is the closest proxy).

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** BrowseComp 90.4 (no-compaction), MCP Atlas / AutomationBench participation with rigorous harness disclosure, 20+-subagent GWTC-5 orchestration, kernel/compiler/chip long-horizon autonomy (24h/48h runs) — exceptional verified agency; capped by image-gated official tables and vendor-admitted UX gap vs Fable 5/Sol.
- **Reasoning: 84/100.** DeepSWE 67.3 near-frontier, I–Love–Q research reproduction (2 weeks → 2h), MiniTriton compiler construction — systems-reasoning depth few models demonstrate; no HLE/GPQA/AA rows readable; Moonshot's own "trails Fable 5 / GPT 5.6 Sol" framing anchors it below frontier.
- **Context window: 100/100.** 1M in / 1M out on all five providers — only Argon (1M/1M) and DeepInfra-hosted peers match the output spec; BrowseComp 90.4 at full 1M without compaction is direct evidence of using it.
- **Multimodal: 86/100.** Native vision in-loop (screenshots→code iteration), image-only OfficeQA Pro corpus handling, video editing (56-clip self-teaser, motion-matched cuts, beat sync), PerceptionBench/ZeroBench participation; text-out only.
- **Coding: 90/100.** DeepSWE 67.3, MiniTriton (compiler-class), kernel-optimization competitiveness with Fable 5, SWE Marathon/FrontierSWE/PostTrainBench participation at max effort; held below 92-class by the ~8-pt DeepSWE gap to Argon and UX admission.
- **Cost efficiency: 72/100.** $3/$15 with $0.30 cache-hit (>90% hit rate in coding) plus open weights + 1M output is a strong bundle; but DeepInfra/Moonshot rates sit above the $2/$10 mid-flagship tier (Sonnet 5.5, GPT-6.1 Sol) that beats it on several rows; 64+ accelerator supernode self-hosting is a steep infra bar.
- **Overall Score: 90/100.** (88 + 84 + 100 + 86 + 90) / 5 = 89.6 → 90. Best-fit: the sovereign 1M-output specialist — long-horizon systems work (compilers, kernels, chips, deep research) where its 1M-out + open weights + vision-in-loop matter; manage its proactiveness with explicit constraints and keep one harness end-to-end.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Kimi K3 launch post kimi.com/blog/kimi-k3 primary — architecture, case studies, benchmark footnotes, limitations; LLM Stats page for pricing/providers/context/date); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.
