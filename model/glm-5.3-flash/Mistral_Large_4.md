# GLM-5.3-Flash — findings by Mistral Large 4

- Source: Z.ai / Zhipu (`z-ai/glm-5.3-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's efficiency-focused 320B-total/18B-active MoE — the model that ran the anonymous "Ox Alpha" stealth preview (revealed 2026-08-26) — first natively multimodal GLM-5-series model, MIT open weights, 1M context, GDPVal-AA v2 leadership over Opus 4.8; ~1/10 the price of GLM-5.2. Alias note: `ox_alpha` resolves here per the alias roster; `glm-5.3-flash-x`/`flashx` is the separate FlashX sibling.
- **Provider / access:** Z.AI API, OpenRouter (`z-ai/glm-5.3-flash`, 34+ providers), Z.ai chat (limited free tier); open weights (MIT) on Hugging Face.
- **Release / knowledge:** Released 2026-08-26 (weights same day, MIT); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `glm-5.3-flash` (Z.AI API); `z-ai/glm-5.3-flash` (OpenRouter); HF `zai-org/GLM-5.3-Flash`.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Natively multimodal — text, image, video in; text out; reasoning; tool calls; office/finance research workflows.
- **Pricing (as of 2026-11-05):** $0.15 / $0.50 per 1M in/out, cached input $0.03 (Z.ai list, Oct 2026 check); third-party gateways from $0.07/$0.25 (EmpirioLabs) — conflicts cited; free limited chat tier; MIT self-host. Stealth free preview ended at reveal.
- **Architecture:** Open weights (MIT); 320B total / 18B active sparse MoE; hybrid linear+sparse attention (KDA+MLA), native FP8; runs on Chinese AI chips (claimed).

### Raw benchmarks found

Z.ai docs/release notes + coverage cross-checked against explainx, DataCamp, BenchLM, AA, orcarouter, kingy, OpenRouter; conflicts noted:

Agent / tool use:

- GDPVal-AA v2: leadership over Claude Opus 4.8 (explainx launch coverage); exact Elo not captured
- DeepSWE: competitive with Opus per launch coverage; exact % not captured
- AA Intelligence Index: **57** (DataCamp; GLM-5.3 flagship at 60) — version drift noted
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **82.1–92.5%** across providers on OpenRouter (range reflects provider variance, cited as range)
- HLE / SciCode / LCR: no verified public score found for flash specifically (GLM-5.3 full: GPQA 91.7, SciCode 59.0, HLE 42.3 — labelled sibling, not merged)

Coding:

- Competitive with Opus 4.8 on coding/agent rows in Z.ai's launch table (explainx/polprog); TB/SWE-V exact % not captured — no verified number cited

Long context:

- 1M window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval-AA v2 leadership claim and strong agent rows; no OSWorld/Claw-Eval captured.
- **Reasoning: 86/100.** AA Index 57 (top open-weight-ish band, 3 below GLM-5.3's 60); GPQA provider range wide.
- **Context window: 96/100.** 1M window in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 85/100.** Text/image/video in natively multimodal, text out; no audio or non-text output.
- **Coding: 89/100.** Launch table competitive with Opus 4.8 on coding/agent rows; exact scores not captured — provisional.
- **Cost efficiency: 98/100.** $0.15/$0.50 per 1M (cached $0.03) in the ~$0.10/$0.20 = 97–99 band, gateways even cheaper; MIT self-host; free chat tier limited.
- **Overall Score: 89/100.** Half-up mean of (87 + 86 + 96 + 85 + 89) / 5 = 88.6 → 89. Best fit: cheapest capable multimodal open-weight coding/agent model — $0.15/$0.50 API or self-hosted MIT; GLM-5.3 full for +3 AA points at ~9x blended cost.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, Z.ai docs cited, 2026-11-05 UTC); cross-checked against explainx, DataCamp, MarkTechPost, BenchLM, AA, orcarouter, kingy, OpenRouter, codersera, CellCog; conflicts (GPQA provider range 82.1–92.5; gateway price variance; AA 57 vs 60 for full) listed side by side; sibling GLM-5.3 figures labelled, not merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai Developer — New Released (GLM-5.3-Flash: 320B/18B, hybrid attention)](https://docs.z.ai/release-notes/new-released)
  - [MarkTechPost — GLM-5.3-Flash release (320B-A18B MoE, 1M ctx, MIT)](https://www.marktechpost.com/2026/08/26/z-ai-releases-glm-5-3-flash-a-320b-a18b-natively-multimodal-moe-with-a-1m-token-context/)
  - [explainx.ai — GLM-5.3-Flash launch / Ox Alpha reveal ($0.15/$0.50, GDPVal-AA v2 lead)](https://explainx.ai/blog/glm-5-3-launch-cyber-defense-benchmarks-august-2026)
  - [DataCamp — GLM-5.3-Flash (AA 57 vs GLM-5.3 60, blended ~$0.10)](https://www.datacamp.com/blog/glm-5-3-flash)
  - [BenchLM — glm-5-3-flash](https://benchlm.ai/models/glm-5-3-flash)
  - [Artificial Analysis — glm-5-3-flash model page](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [OpenRouter — z-ai/glm-5.3-flash (GPQA provider range 82.1–92.5%)](https://openrouter.ai/z-ai/glm-5.3-flash)
  - [kingy — Ox Alpha pricing check Oct 2026 ($0.15/$0.03/$0.50)](https://kingy.ai/blog/ox-alpha-free-opencode-stealth-model/)
  - [CellCog — GLM-5.3-Flash price after promo (gateway variance)](https://cellcog.ai/blog/glm-5-3-flash/)
  - [orcarouter — Flash vs full GLM-5.3 (1/10 price of 5.2, 1/20 promo)](https://www.orcarouter.ai/blog/glm-5-3-flash-vs-glm-5-3)
  - [codersera — GLM-5.3 weights guide (Flash MIT Aug 26, full custom Aug 28)](https://codersera.com/blog/glm-5-3-launch-guide-2026/)
