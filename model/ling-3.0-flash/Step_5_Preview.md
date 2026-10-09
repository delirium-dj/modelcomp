# Ling-3.0-flash — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash`, announced 2026-07-24, weights 2026-08-07)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash (the fast tier of the Ling 3.0 family)
- **Short description:** Ant's "next-generation native hybrid reasoning" model — a hybrid-linear MoE with 124B total but only **5.1B active parameters** (35 Kimi-Delta-Attention + 7 Gated-MLA layers at 5:1, 512 routed + 1 shared experts, 8 activated) that claims to match or outperform its own 1T-class predecessor Ring-2.6-1T at ~12.4% of the parameters. It shipped API-only on 2026-07-24 and flipped to MIT open weights on 2026-08-07 — two weeks that moved it from spec sheet to independently scored (Artificial Analysis's 38 on the Intelligence Index, up 24 points from Ling-2.6-flash, on the open-weights Pareto frontier for intelligence vs total parameters). Native 256K context (8K→32K→256K training schedule), thinking on by default, text-only, ~$0.075/$0.22 per million tokens with vendor-claimed peak throughput up to 1,000 tok/s (measured ~368 tok/s by AA).
- **Provider / access:** Hugging Face / ModelScope (MIT; FP8 ~128GB, INT4/FP4 variants); Ant Ling platform API; OpenRouter.
- **Release:** 2026-07-24 (announced), 2026-08-07 (weights).
- **Context window:** 256K native (262K as served), extendable to 1M.
- **Modalities:** Text in → text out; thinking mode default on (temperature 0.6 / top-p 0.95 / top-k 20).
- **Pricing (as of 2026-10-09):** $0.075/M input, $0.22/M output (80% off cache hits); MIT weights free.
- **Architecture:** hybrid-linear MoE 124B/5.1B, 5:1 KDA:Gated-MLA, context curriculum 8K→32K→256K.

### Raw benchmarks found

Vendor (model card; OpenHands harness for SWE series, AA protocol for TB 2.1):

- SWE-Bench Pro: **56.6%** (OpenHands, temperature 0.6, 256K context)
- SWE-bench Multilingual: **72.4%**
- MathArena AIME 2026: **93.2%**; HMMT February 2026: **87.0%**; HLE: **22.7%**
- Also evaluated (values in card images): Tau3-banking-AA, MCP-Atlas (500-task public set), SkillsBench (87 tasks via kilo-code), MiniAppBench, AntSWEBench, GDPval v2-AA (Stirrup harness), DRACO, BrowseComp single/multi-agent, WideSearch

Artificial Analysis (independent):

- Intelligence Index: **38** at launch (July index) → **24.9** (v4.3) / 20.63 — on the open-weights Pareto frontier for intelligence vs total parameters (no smaller open-weights model scores higher); DeepSeek V4 Flash Max still leads the flash tier at 52
- Measured output: ~368 tokens/second
- Via AI Atlas (current rows): Terminal-Bench 2.1 **55.4%**, TB 4.0 0%, SciCode **42.0%**, HLE **23.7%**, GPQA Diamond **85.5%**

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.1 55.4% (AA protocol) is a solid mid-band agentic-terminal result and the vendor card emphasizes Tau3-banking/MCP-Atlas/SkillsBench strength — but the numeric tool-use values live in card images, so only TB 2.1 is independently verifiable.
- **Reasoning: 62/100.** GPQA Diamond 85.5% (AA) and AIME 93.2% / HMMT 87.0% (vendor) are upper-mid-band; HLE 22.7–23.7% and AA Intelligence Index 24.9 cap it below the frontier tier.
- **Context window: 72/100.** 256K native is the 200K–500K band (65–84) with a documented 8K→32K→256K training schedule; no AA-LCR/MRCR retrieval figure is published for this model.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20). (The vision sibling is the separate `ling-3.0-flash-vl`.)
- **Coding: 58/100.** SWE-Bench Pro 56.6% (vendor) and TB 2.1 55.4% (AA) are solid mid-band for 5.1B active; SciCode 42.0% and the unreproduced vendor table keep it below the frontier band.
- **Cost efficiency: 97/100.** $0.075/$0.22 with 80%-off cache hits, MIT weights, 5.1B active (FP8 ~128GB), ~368 tok/s measured — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier, one of the cheapest ways to run hybrid reasoning.
- **Overall Score: 52/100.** Best-fit recommendation: the efficiency flash tier — 5.1B-active hybrid reasoning at $0.075/$0.22 with a 56.6% vendor SWE-Pro claim and a Pareto-frontier AA index; a text-only mid-tier model whose headline table still awaits independent reproduction.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (inclusionAI HF model card + eval-results commits, OrcaRouter independent analysis, AI Atlas AA rows, haimaker specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_4.md`, using the same headings.
