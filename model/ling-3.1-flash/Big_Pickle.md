# Ling 3.1 Flash — findings by Big Pickle

- Source: inclusionAI / Ant Group (`ling-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** inclusionAI's (Ant Group) hybrid-reasoning mixture-of-experts model for
  coding, multi-step analysis and tool-using agents, launched 2026-09-30 — a large step up from
  Ling 3.0 Flash (124B total / 5.1B active) to 560B total / ~25B active per token. Every
  published number below is **vendor-reported** from Ant's single launch comparison table; no
  independent evaluator has run this model, and BenchLM deliberately assigns it no overall rank.
- **Provider / access:** Vercel AI Gateway as `inclusionai/ling-3.1-flash` (provider: Novita),
  OpenRouter as `inclusionai/ling-3.1-flash` (sole provider Novita). Chat Completions type.
  OpenRouter serving stats at time of writing: 1.12s median latency, 66 tokens/s median
  throughput, Novita uptime 100%.
- **Release / knowledge:** launched 2026-09-30 (TechNode / Vercel changelog); the OpenRouter
  listing dates it 2026-10-02. Training cutoff not disclosed.
- **IDs:** `inclusionai/ling-3.1-flash` (Vercel AI Gateway and OpenRouter), and on OpenCode Zen as
  `opencode/ling-3.1-flash-free` — the same weights on a free subscription-plan tier, not a
  separate model. This folder's `meta.json` id (`opencode/ling-3.1-flash`, no tier suffix) is a
  scaffold placeholder.
- **Context window:** **262,144 served / 32,768 max output** on the live Vercel and OpenRouter
  routes. Ant designed the model for **up to 1M tokens**, but the free trial caps context at
  256K "citing overall service cost", and the full window is promised only when the paid tier
  goes live after the trial. Plan against 262K today, not 1M.
- **Modalities:** text in/out (Vercel listing describes long-context text workflows; no image,
  audio or video input is documented for this model). Reasoning: hybrid, switchable; tool calling
  supported.
- **Pricing (as of 2026-10-02):** **free right now** — $0 in / $0 out on OpenRouter via Novita,
  and free on Vercel AI Gateway through 2026-10-13. Paid pricing is **not yet announced**, and
  the 1M context window sits behind the post-trial paid tier. (Reference only, not this model's
  rate: Ling 3.0 Flash shipped at $0.075 in / $0.22 out per 1M.)
- **Architecture:** proprietary MoE, 560B total parameters, ~25B active per token. Weights are
  **not released**; Ant has said it plans to open-source the model after the trial, with no
  license named. Ling 3.0 Flash was MIT — this is not yet.

### Raw benchmarks found

All rows are **vendor-reported** from Ant's launch comparison table (2026-09-30), independently
recorded (not reproduced) by BenchLM and several outlets. No third-party harness has scored this
model; treat every number as a vendor claim.

Agent / tool use:

- Terminal-Bench 2.1: **81.18%** (Ant launch table; vendor harness. Slightly behind DeepSeek-V4.1-Flash 90.60 and GLM 5.3 flash 84.30 in Ant's own comparison)
- Terminal-Bench 4.0: **40.40%** (Ant launch table — leads the flash tier it compares against: DeepSeek-V4.1-Flash 31.20, GLM 5.3 flash 32.80)
- AutomationBench: **52.5%** (Ant launch material)
- SkillsBench: **68.7%** (Ant launch material)
- Finance Agent v2: **57.9%** (Ant launch material)
- BrowseComp: **91.67** (top score in Ant's whole comparison table)
- WideSearch: **83.32** (Ant launch table)
- GDPval-AA: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **37.44%** (Ant launch table; up from Ling 3.0 Flash's 22.7; behind Claude Opus 5's 54.90 in the same table)
- MultiChallenge: **69.78%** (Ant launch table)
- HealthBench Professional: **65.35%** (Ant launch table)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** —
  BenchLM holds 8 benchmark rows for this model but publishes **no overall score and no rank**
  ("overall score: coming soon") because third-party coverage is absent
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- CyberGym: **87.90%** (Ant launch table; a fraction behind DeepSeek-V4.1-Flash 88.10)
- DRACO: **85.49%** (Ant launch table)

Coding:

- SWE-bench Pro: **65.39%** (Ant launch table — the best flash-tier score in that table: DeepSeek-V4.1-Flash 56.77, GLM 5.3 flash 63.06)
- SWE Atlas Codebase QnA: **55.9%** (Ant launch material)
- DeepSWE: **59.70%** (Ant launch table; trails DeepSeek-V4.1-Flash 74.20 and GLM 5.3 flash 63.40)
- SWE-bench Verified: **no verified public score found** (only the Pro variant is reported)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- **no long-context retrieval reported.** No MRCR, RULER or GraphWalks number exists for this
  model at any length, so the 262K served window (and the announced 1M) is a spec with zero
  retrieval evidence behind it.

### Normalized scores (1–100)

- **Tool use: 78/100.** The strongest part of the published set and the model's stated purpose:
  Terminal-Bench 2.1 at 81.18%, Terminal-Bench 4.0 at 40.40% (best flash-tier in Ant's table),
  BrowseComp 91.67 and WideSearch 83.32 for search, plus AutomationBench 52.5% and SkillsBench
  68.7%. Capped just under the frontier band (TB2.1 ~88%+ for 90–100) and discounted for being
  vendor-only numbers with no Tau3, GDPval or Claw-Eval row at all.
- **Reasoning: 70/100.** HLE 37.44% sits right at the frontier marker (40%+) without the
  accompanying GPQA or index score, MultiChallenge 69.78% and BrowseComp 91.67% show real
  multi-step range, and Hybrid reasoning is switchable. What holds it down is that there is no
  measured Intelligence Index, no GPQA Diamond, no CritPt and no long-context retrieval figure
  for this ID — the methodology's 90–100 band wants a bundle of these, not one.
- **Context window: 74/100.** Scored on what is actually served: **262,144 tokens** with 32,768
  max output (Vercel AI Gateway and OpenRouter both agree), which lands in the 200K–500K band at
  65–84 (262K ≈ 74). The announced 1M window is explicitly **not** available — Ant caps the trial
  at 256K and defers the full window to the post-trial paid tier — so it earns nothing. Max output
  under 64K is noted as a caveat, not a separate penalty.
- **Multimodal: 15/100.** Text-only as far as anything published goes: the Vercel listing
  describes long-context text workflows, and no image, audio or video input is documented. Text
  only maps to 10–20 on the scale.
- **Coding: 72/100.** SWE-bench Pro 65.39% is the strongest flash-tier coding number in Ant's
  own comparison and Terminal-Bench 2.1 81.18% is genuinely high, with SWE Atlas Codebase QnA at
  55.9% adding a codebase-navigation data point. Capped by DeepSWE 59.70% trailing the flash-tier
  peers it is compared against, Terminal-Bench 4.0 at only 40.40%, and zero independent
  verification — no LiveCodeBench, SciCode or Vibe row exists.
- **Cost efficiency: 100/100.** Priced at $0 in / $0 out right now (OpenRouter via Novita, free on
  Vercel through 2026-10-13). Strongly flagged as time-limited and incomplete: no paid rate is
  published, the free window is explicitly an evaluation period, and the attractive 1M context
  does not come with it.
- **Overall Score: 61.8/100.** Half-up mean of the five quality dims
  (78 + 70 + 74 + 15 + 72) / 5 = 61.8. Best fit: a free trial-window pick for agentic and
  tool-heavy search/coding work where the 262K window suffices — evaluate it yourself before
  betting on it, because every published number comes from the vendor and the paid tier that
  unlocks the real 1M context does not exist yet.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Ant's launch benchmark table as reported by TechNode,
  threatfrontier, BenchLM, Vercel AI Gateway model listing and changelog, OpenRouter listing,
  Vercel/OrcaRouter/AI Weekly launch coverage). Scores are normalized 1–100 interpretations, not
  official vendor scores; every raw number here is vendor-reported and unreproduced.
- Future sources: add a new file next to this one, e.g. `Ling_3.2_Flash.md`, using the same
  headings.