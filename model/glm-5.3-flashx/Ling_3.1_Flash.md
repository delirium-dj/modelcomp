# GLM 5.3 FlashX — findings by Ling 3.1 Flash

- Source: Z.ai (Zhipu) / GLM-5.3-FlashX
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's API-only high-speed variant of GLM-5.3-Flash (released 2026-08-26; some trackers list 2026-09-18), a 320B-total/18B-active MoE with hybrid linear+sparse attention, IndexPool, and Manifold-Constrained Hyper-Connections, pre-trained on a 30T-token multimodal corpus. Same underlying model as GLM-5.3-Flash; FlashX is the ~200 tok/s serving variant. Before launch it ran anonymously as "ox-alpha" on OpenCode and OpenRouter.
- **Provider / access:** Z.ai API `glm-5.3-flashx`; OpenRouter/OpenCode Zen `z-ai/glm-5.3-flashx` (OpenAI-compatible Chat Completions); also Kilo Gateway, Vercel AI Gateway, Tempr, ZenMux, Ofox.
- **Release / knowledge:** 2026-08-26 (Z.ai launch); knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.3-flashx` (API-only; no separate weights release for the FlashX variant — the Flash base weights are MIT on Hugging Face as `zai-org/GLM-5.3-Flash`).
- **Context window:** 1,048,576 tokens (1M) per OpenRouter/Z.ai/Sovyron; max output ~128–131K tokens.
- **Modalities:** text, image, video, file in; text out; reasoning enabled; tool calls (Toolathlon/AutomationBench evaluated).
- **Pricing (as of 2026-10-08):** Z.AI $0.37 / 1M input, $1.25 / 1M output, cache read $0.075/1M (free cache write on Z.AI/Zhipu); cheapest reseller (Ofox) $0.15/$0.50; blended ~$0.59/1M.
- **Architecture:** 320B total / 18B active MoE, 45 layers, hybrid linear+sparse attention with IndexPool (4 indexer key vectors pooled into 1), Manifold-Constrained Hyper-Connections; proprietary serving, MIT base weights.

### Raw benchmarks found

All task numbers below are Z.ai vendor-reported for GLM-5.3-Flash and apply to FlashX (same weights); no independent reproduction found yet (BenchLeader: "no independent benchmark results so far").

Agent / tool use:

- Toolathlon Verified: **78.4%** (Z.ai; vs GLM-5.2 59.9%)
- AutomationBench v1.0.6: **48.8%** (Z.ai; vs GLM-5.2 26.2%)
- Agents' Last Exam: **26.3%** (Z.ai)
- OSWorld 2.0: **59.1%** (Z.ai; vs DeepSeek-V4-Vision-Exp 54.9%)
- Vision2Web: **77.8%** (Z.ai)
- Terminal-Bench 2.1: **84.3%** (Z.ai; vs GLM-5.2 81.0%)

Reasoning / knowledge:

- HLE w/ Tools: **55.3%** (Z.ai; vs GLM-5.2 54.7%)
- AA Intelligence Index v4.1.1: **57** (Z.ai, at $0.045/task discounted)
- GDPval-AA v2: **1773** Elo (Z.ai; vs GLM-5.2 1504, Opus 4.8 1582)
- LMSYS Arena Elo: **1474** (LM Market Cap, unverified)
- AI BENCHY micro-eval: 6.0/10 composite, 63.8% pass rate, 10.0/10 reliability, tool-calling 10/10 (small 11-test sample, 2026-09-30)

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai; vs GLM-5.2 46.2%)
- NL2Repo: **56.3%** (Z.ai; vs GLM-5.2 48.9%)
- Z.ai Code Bench v1.0 (Claude Code 2.1.207 harness), max effort: **29.0%** (vs Claude Opus 4.8 29.5%)

Vision (Z.ai):

- CharXiv Reasoning w/ Tools: **89.4%**; Chartography w/ Tools: **78.0%**; MMVU: **80.5%**; MVbench: **77.8%**; OfficeQA Pro: **62.4%**; BabyVision: **53.4%**

Long context:

- 1M-token context served at standard price; no verified long-context retrieval score (MRCR/RULER/AA-LCR) found for this model.

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon 78.4% and AutomationBench 48.8% are solid flash-tier, but Agents' Last Exam 26.3% and OSWorld 2.0 59.1% cap the score; all rows are vendor-reported.
- **Reasoning: 72/100.** HLE w/ tools 55.3% and AA Index 57 (vendor) sit a notch below the frontier (Fable 5: 64.5% / ~62–65); GDPval-AA v2 1773 Elo is strong for the tier.
- **Context window: 80/100.** Full 1M-token window at standard pricing with long-context-optimized hybrid attention; no independent long-context retrieval measurement found.
- **Multimodal: 85/100.** Natively multimodal (image/video/file) with strong vision rows — CharXiv 89.4%, MMVU 80.5%, MVbench 77.8%, Chartography 78.0%; BabyVision 53.4% is the weak row.
- **Coding: 78/100.** DeepSWE 63.4%, Terminal-Bench 2.1 84.3%, NL2Repo 56.3% beat GLM-5.2 by wide margins; Z.ai Code Bench 29.0% (max effort) shows it still trails Opus 4.8 on hard production tasks.
- **Cost efficiency: 90/100.** $0.37/$1.25 per 1M (blended ~$0.59) is roughly a tenth of GLM-5.3's price for near-Opus-4.8 flash-tier capability; resellers go as low as $0.15/$0.50.
- **Overall Score: 79/100.** Mean of the five quality dims (78+72+80+85+78)/5 = 78.6 → 79; best fit as a cheap, fast, natively multimodal default with coding-agent workloads, pending independent verification.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Z.ai docs/blog, APIMaster, BenchLeader, Command Code, Sovyron, OpenRouter, LM Market Cap, AI BENCHY); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
