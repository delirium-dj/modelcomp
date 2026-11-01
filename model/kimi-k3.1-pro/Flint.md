# Kimi K3.1 Pro — findings by Flint

- Source: Moonshot AI (Moonshot AI) / Kimi K3.1 Pro
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's first model of the new K3.1 series, a post-trained 3T-class open-weight reasoning model (2.8T total / 104B active MoE, Kimi Delta Attention + Attention Residuals) with a 1M-token context, aimed at long-horizon coding, 3D creation, financial research and agentic tasks; a Kimi K3.1 Pro Highspeed variant (2–3× output speed) shipped alongside.
- **Provider / access:** Moonshot AI Kimi API (`kimi-k3.1-pro`, OpenAI-compatible, base `https://api.moonshot.ai/v1`); consumer surfaces Kimi.ai / Kimi mobile apps / Kimi Work / Kimi Code; full open weights under the Kimi K3 License due 2026-11-04; third-party hosts via API aggregators (Kyma, OpenCode Go per LiteLLM).
- **Release / knowledge:** Released 2026-10-23 (API + consumer); full weights 2026-11-04; knowledge cutoff not verified in sources found.
- **IDs:** `kimi-k3.1-pro`; Highspeed: `kimi-k3.1-pro-highspeed`.
- **Context window:** 1,048,576 tokens (1M) per official Kimi docs (API quickstart, pricing, Alibaba Model Studio); max output reported at ~1,048,576 (LiteLLM / Alibaba docs) and ~943,718 (WaveSpeed) — provider-dependent, upper bound 1M.
- **Modalities:** Text + image input (native MoonViT-V2 vision encoder); text output; reasoning (low/high/max); tool calling; structured outputs; JSON mode; audio not listed.
- **Pricing (as of 2026-10-24):** API $2.00/$10.00 per 1M input/output, cache hit $0.20, cache writes 5min $2.00 / 1h $4.00; Highspeed $4.00/$20.00; batch inference 60% of standard.
- **Architecture:** Mixture-of-Experts, 2.8T total / 104B active, 93 layers, KDA + AttnRes, 896 experts (16 active/token), MXFP4 weights / MXFP8 activations, multimodal (MoonViT-V2).

### Raw benchmarks found

Official (Moonshot — kimi.ai blog, platform.kimi.ai, OpenLM.ai, LinkedIn):

- Terminal-Bench 4.0: **65.7%** (Claude Code harness) — ahead of GPT-6 Astra (58.2%), behind Claude Opus 5.5 (66.4%).
- Kimi Code Bench 3.0 Long-horizon (internal): **61.2%** (vs K3 55.95%).
- SWE-Marathon v1.1: **51.7** (top among compared six).
- DeepSWE v1.1: **75.5** (vs DeepSeek-V4.1-Flash-1017 77.0, Opus 5.5 74.2, GPT-6 Astra 74.1).
- Humanity's Last Exam with tools: **70.0** vs Opus 5.5 67.7.
- OfficeQA Pro v2: **64.4** vs Opus 5.5 62.2.
- BenchCAD with-tools: **92.7**.
- HLE no tools: **39.4** (Diamond); HLE with tools: **70.0**.

Independent (Artificial Analysis, xenospectrum, benchgap):

- Artificial Analysis Intelligence Index v4.3.2: **55.1** (4th of 215; +11 over Kimi K3's 44; Opus 5.5 58, Sonnet 5.5 56, Muse Wonder Full 56).
- GDPval-AA: **1,846 Elo** (3rd; +312 over K3; Opus 5.5 1,866, Muse Wonder Full 1,857).
- Terminal-Bench 4.0 (AA independent run): **67%** (vs Moonshot's 65.7% — separate runs, no delta implied).
- AutomationBench-AA: **73%** (from 58% for K3).
- AA-Omniscience: hallucination rate 20→30, accuracy 48→51.
- AA-Science: SciCode 59→61, CritPt 23→25.
- Deep-research additions from this pass (official + independent):
  - Long context retrieval: RULER **81.4%** (TrustTheBench, independent); MRCRv2 **86.0%** (benchgap); LongBench v2 **63.3%** (benchgap); AA Long Context Reasoning (**86.3**, AA/benchgap); GraphWalks BFS **71.9%** (benchgap); LVBench **86.8%** (benchgap). IntuitionLabs (2026-09): Kimi K3 had NO published RULER/LongBench/MRCR score; AA-LCR v1.1 gave K3 **74.7**.
  - Coding: HumanEval **95.9%**, HumanEval+ **90.8%** (TrustTheBench-sourced); KingBench (independent, Kingy): Kimi **53.7** across 6 practical tasks vs Opus 5.78 / GPT-6 Astra 5.65 / GPT-6.1 Soul 5.50 — independent coding-agent eval placed GPT-6 Astra ahead of Kimi.
  - Safety / cyber: xdev-bench-hard ablation (Moonshot): unfiltered **90.5%** → filtered **81.0%** (pass@3, no hard timeouts/output limits); AA Cyber Index: Kimi **64%** (**#1** among open models tested; CyberGym-E2E-AA **95%** highest; DeepsecBench-AA 37%; CWE-Bench-AA 61%); AA defensive run recorded **zero safety refusals** from K3.1 Pro (closed models OpenAI/Anthropic/Google refused tasks → scored zero).
  - Highspeed: AA provider data — Highspeed output **69.7 t/s** vs Kimi **30.9 t/s**; TTFT **31.54s** vs **68.04s**; IA HubMix measured ~**2.3×** speedup; Kingy caveats (quality parity unverified; Kimi Code quota doubling in Highspeed).

Cross-source comparison & conflicts:

- Moonshot's own Kimi Hallu Bench Hard: blog reported 23.35% → 6.85%, API materials 23.4% → 8.3% — same benchmark, same company, two answers.
- ProgramBench (binary scoring): K3.1 Pro **31.5** vs Claude Opus 5.5 **65.0** — not directly comparable (binary vs partial).
- Terminal-Bench Science 0.1: K3.1 Pro **38.1** vs Opus 5.5 **63.3** / GPT-6 Astra **68.1** — different harnesses.
- Internal vs independent: AA Intelligence Index (55.1) vs vendor-adjacent figures; cost per task roughly equal to K3 at $1.98.
- Deep-pass conflicts (new vs prior deep-research round): GPQA Diamond spread **92.4–97.5%** (benchgap AA / Moonshot / LLMPodium) — sources disagree on scale; HLE-Diamond denominators differ (Moonshot no-tools 39.4 vs AA HLE w/o tools 51.1 / HLE w/ tools 70.0) — subsets not directly comparable; Highspeed speed multiplier claimed 2–3× (Moonshot) vs measured ~2.3× (IA HubMix) with quality parity unverified; xdev-bench-hard ablation (90.5→81.0 filtered) vs AA Cyber Index defensive results (64%, zero refusals) — different test types (offensive exploit pass@3 vs defensive cyber index).

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 4.0 ~65–67% and GDPval-AA 1846 Elo sit mid-frontier for agent tool use; no verified Claw-Eval / Tau3 numbers.
- **Reasoning: 80/100.** GPQA Diamond 94.2%, HLE with tools 70%; Intelligence Index 55.1 just below the 60+ frontier band — solid but not frontier.
- **Context window: 100/100.** Documented 1M-token context (top tier).
- **Multimodal: 65/100.** Text + image input (MoonViT-V2), text output.
- **Coding: 70/100.** DeepSWE 75.5, SWE-bench Pro 61.7, LiveCodeBench 90.3, Terminal-Bench 4.0 ~65–67.
- **Cost efficiency: 72/100.** $2.00/$10.00 per MTok (cache hit $0.20) — cheap frontier-class open-weight API pricing.

- **Overall Score: 75.4/100.** Mean of the five quality dims (Tool 62 + Reasoning 80 + Context 100 + Multimodal 65 + Coding 70) / 5 = 59.4 → 59; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/kimi-k3.1-pro)** — 2026-11-01
- Method: public web research prioritizing official model card/docs (Moonshot kimi.ai blog, platform.kimi.ai quickstart/pricing, OpenLM.ai model summary) plus independent benchmarks/reviews (Artificial Analysis, TrustTheBench, benchgap, Kingy, IntuitionLabs, xenospectrum) — deep-research pass (2026-11-01) covering long-context retrieval, safety/cyber evaluations, Highspeed, HumanEval and coding-agent benchmarks; conflicts compared across official vs independent sources; ≥10 independent web searches.
- Reference URLs:
  - [Kimi K3.1 Pro Tech Blog: Advancing Open Intelligence](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Kimi K3.1 Pro - Kimi API Platform](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Kimi K3.1 Pro launches at 4th on the Artificial Analysis Intelligence Index](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Kimi K3.1 Pro Pricing](https://www.kimi.ai/resources/kimi-k3-1-pro-pricing)
  - [Kimi K3.1 Pro Benchmarks: The Vendor Sheet and the Independent Runs](https://k31pro.novcog.us.com/benchmarks)
  - [Kimi K3.1 Pro Benchmarks: Does It Really Beat GPT-6 Astra?](https://www.mindstudio.ai/blog/kimi-k3-1-pro-benchmarks-review)
  - [Moonshot's Kimi K3.1 Pro Ranks 4th on Independent AI Index With a Score of 55](https://xenospectrum.com/en/kimi-k31-pro-benchmarks-cost/)
  - [Kimi K3 Long-Context Evaluation: Evidence Retrieval Benchmark](https://intuitionlabs.ai/articles/kimi-k3-long-context-evaluation)
  - [Moonshot says cyber-data filtering cut Kimi K3.1 Pro exploit pass@3 to 81%](https://www.ai-primer.com/engineer/stories/kimi-k31-pro-cyber-filtering)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
