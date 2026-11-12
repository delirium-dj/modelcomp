# Qoder Sonus — findings by GLM 5.3 Flash

- Source: Alibaba Qoder (`sonus` — built-in Qoder platform model)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus (/ˈsoʊnəs/)
- **Short description:** Qoder's (Alibaba's agentic-coding platform) built-in flagship model, launched 2026-09-10. Positioned for marathon-length autonomous tasks, hardest knowledge work, and serious coding, with Computer Use (direct desktop/professional-software operation via Qoder Desktop 0.2.3+) as its signature talent.
- **Provider / access:** Qoder platform only — Qoder, Qoder IDE, Qoder CLI, JetBrains plugin, QoderWake, Cloud Agents. No standalone public API, no open weights, not sold separately (bundled with Qoder subscriptions). Credit reference factor 3.2x at launch, raised to **8x** on 2026-09-21 — Qoder's most expensive model (SOTA rate; community threads report extreme credit burn, e.g. ~1,000 credits in ~6 minutes of planning and promo credits consumed without task completion).
- **Release / knowledge:** 2026-09-10 launch; knowledge cutoff not disclosed.
- **IDs:** `sonus` (Qoder model selector / Cloud Agents). No provider-external ID exists; therefore **no Free ID** anywhere.
- **Context window:** 128K tokens total per public model trackers (ModelComp metadata); Qoder's own docs do not publish a Sonus spec sheet (its CLI docs list 200K/400K/1M options for third-party models, and an "Ultimate" Cloud-Agents tier advertises up to 1M input, but Qoder does not confirm either maps to Sonus). Treated as 128K, unofficially documented.
- **Modalities:** text in / text out per public trackers; a vision flag (`is_vl: true`) appears on the Ultimate-tier API object but is not officially tied to Sonus — treated as unverified. Computer Use operates the desktop via Qoder's harness (screen understanding, cursor/keyboard, tiered permissions and tool whitelists), which is agentic tooling rather than input modality.
- **Pricing (as of 2026-11-04):** Qoder Credits only — 8x reference factor (≈8x a base-model task, the platform's SOTA rate); no per-token public pricing; free promo credits exist (e.g. 1,024-credit developer-day event, daily SOTA packs) but expire quickly.
- **Architecture:** undisclosed — Qoder does not identify the underlying model. Community speculation (underlying model is a re-badged frontier model) is unverified and not repeated here as fact.

### Raw benchmarks found

> Qoder published no eval table with the launch ("globally leading" marketing language only). The two verified figures below are community-measured, each independently cited by three reporting sources (agreement view, verified 2026-10-30). No vendor-published benchmark exists.

Agent / tool use:

- Terminal-Bench: **65%** (community-measured; three independent reports agree; specific TB version not pinned by the sources)
- OSWorld-Verified: no verified public score found (Computer Use is the vendor's headline claim, but no published OSWorld number exists to verify it)
- Tau2/Tau3-Banking / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / CritPt / Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **74.5%** (community-measured; three independent reports agree)
- SWE-bench Pro: no verified public score found
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 72/100.** Community-agreed Terminal-Bench 65% lands between the methodology's mid band (45–60%) and frontier band (~88%+), and the Qoder harness (connectors, skills, computer-use permissions) is real tooling — but the Computer Use headline has zero published OSWorld-style evidence behind it, which caps the score at mid-frontier.
- **Reasoning: 65/100.** Zero verified reasoning benchmarks (no GPQA/HLE/Index anywhere); scored from the strongest indirect anchor — SWE-bench Verified 74.5% and TB 65% both require sustained multi-step reasoning of late-2025-flagship class — and capped hard by the total absence of direct knowledge/reasoning evidence.
- **Context window: 56/100.** 128K total per public trackers (100K–200K tier, below the 200K=70 midpoint because the figure is unofficial and undocumented by Qoder); the 1M "Ultimate tier" claim stays unverified and is not scored.
- **Multimodal: 15/100.** Text-only per public metadata; the vision flag on the Ultimate-tier API object is unverified — no published vision benchmark and no official modality spec.
- **Coding: 74/100.** SWE-bench Verified 74.5% (three agreeing reports) is Sonnet-4.5-class — above the mid band but below the frontier references (TB2.1 85%+/DeepSWE 74%+), with no SWE-bench Pro, LiveCodeBench, or SciCode numbers to lift it.
- **Cost efficiency: 22/100.** 8x credit reference factor (Qoder's SOTA rate, raised from 3.2x) with reported extreme burn and no per-token pricing — worse than the methodology's $10/$50 ≈ 30 anchor, with the added opacity of a closed credit system and time-limited promo credits.
- **Overall Score: 56/100.** (72 + 65 + 56 + 15 + 74) / 5 = 56.4 → 56. Best-fit recommendation: a platform-convenience pick for Qoder subscribers who want hands-off desktop automation inside one tool — not competitive as a general model at its 8x credit rate, and unverifiable outside the Qoder ecosystem.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-04
- Method: public internet research (official Qoder forum announcement + Qoder docs release notes, Aliyun developer coverage, Bit.Fan/BlockBeats/cnyes news, ai-bio.cn profile, ModelComp agreement view for the two community-corroborated benchmark figures; this fresh draft was completed before comparing against my own earlier negative-findings twin, whose zero-benchmark verdict it supersedes with two newly verified figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qoder forum — "Sonus is here" launch announcement (2026-09-10)](https://forum.qoder.com/t/sonus-is-here-our-new-built-in-model-with-a-special-talent-for-computer-use/12408)
  - [Qoder docs — Model Usage Reference Factor Adjustment (Sonus 3.2x → 8x, 2026-09-21)](https://docs.qoder.com/release-notes/model-consumption-reference-update)
  - [Qoder docs — CLI model selection and credit rates](https://docs.qoder.com/cli/model)
  - [Aliyun Developer — Qoder launches Sonus, Computer Use enhanced (official ecosystem post)](https://developer.aliyun.com/article/1762195)
  - [Bit.Fan — Alibaba-backed Qoder launches Sonus with a focus on computer use](https://www.bit.fan/en/news/list/qoder-launches-sonus-for-computer-use-6678dc86-en-keyName-525a11d1)
  - [ModelComp — Qoder Sonus scores & agent ratings (agreement benchmarks: TB 65%, SWE-V 74.5%)](https://modelcomp.vercel.app/model/qoder-sonus/)
  - [ai-bio.cn — Sonus profile (no API, not open-source, architecture undisclosed)](https://ai-bio.cn/sonus/)
  - [Qoder forum — Sonus credits complaint thread (burn-rate evidence)](https://forum.qoder.com/t/qoder-sonus/12588)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_5.3_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_5.3_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Qoder Sonus — negative findings by GLM 5.3 Flash

- Source: Alibaba Qoder (`sonus` — built-in Qoder platform model)
- Archived date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Qoder Sonus (/ˈsoʊnəs/)
- **Short description:** Alibaba's Qoder team's built-in flagship model for the Qoder agentic-coding platform, launched 2026-09-10. Positioned for marathon-length autonomous tasks, the hardest knowledge work, and serious coding, with Computer Use (direct desktop/software operation via Qoder Desktop 0.2.3) as its signature talent.
- **Provider / access:** Qoder platform only — Qoder, Qoder IDE, Qoder CLI, JetBrains plugin, QoderWake, Cloud Agents. No standalone API, no open weights; not separately sold (bundled with Qoder subscriptions). Credit multiplier 3.2x at launch, raised to **8x** on 2026-09-21 — by far Qoder's most expensive model.
- **Release / knowledge:** 2026-09-10 launch; knowledge cutoff unknown (not disclosed).
- **IDs:** `sonus` (Qoder model selector / Cloud Agents API). No provider-external ID exists.
- **Context window:** no official figure published for Sonus. The Qoder Cloud Agents "Ultimate" tier advertises max input 1,000,000 with selectable 200K/400K/1M windows, but Qoder does not confirm that the Ultimate tier is Sonus (Sonus/Cantus had left the selector table by mid-October). Unverified — cannot be scored.
- **Modalities:** unverified. Community peers assume text in/out; the Ultimate-tier API object reports `is_vl: true` (vision), but no official Sonus spec sheet exists.
- **Pricing (as of 2026-11-03):** Qoder Credits only, 8x reference factor (≈8x a base-model task). Community reports of extreme burn (~1000 credits in ~6 minutes of planning; ~2000 free promo credits consumed without completing a task) corroborate the premium rate.
- **Architecture:** undisclosed. Qoder does not identify the underlying model. Community speculation only: a Qoder forum user claims "Sonus is Sol, Cantus is Fable," and another thread notes the output style is "exactly Astra" (OpenAI GPT-6 family) — all unverified, no vendor confirmation.

## Raw benchmarks found

> SELF-EXCLUSION: zero verified public benchmark numbers exist for this model. Qoder published no eval table with the launch ("globally leading" marketing language only); Sonus is not API-accessible, so no independent harness (SWE-bench, Terminal-Bench, OSWorld, Artificial Analysis, etc.) has scored it. Not saved as a scored report per template rule.

Agent / tool use:

- Terminal-Bench (any version): no verified public score found
- OSWorld-Verified: no verified public score found
- Tau2/Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
