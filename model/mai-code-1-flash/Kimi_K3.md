# MAI-Code-1-Flash — findings by Kimi K3

- Source: Microsoft AI (`mai-code-1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's first in-house fast coding model, launched at Build 2026 (2026-06-02) inside GitHub Copilot; trained around production workflows rather than benchmark-only targets, without OpenAI lineage. Superseded by MAI-Code-1.1-Flash (2026-08-11) and retired from Copilot on 2026-09-10.
- **Provider / access:** GitHub Copilot (VS Code et al.) during its service window — **now retired** (picker removed 2026-09-10 per GitHub changelog coverage); historical record only.
- **Release / knowledge:** 2026-06-02 (Build 2026); knowledge cutoff not published.
- **IDs:** `mai-code-1-flash` (Copilot). No OpenCode Zen Free ID; "free" availability was via Copilot's auto-selection on free tier.
- **Context window:** not published in public materials I could verify (the 256K figure belongs to its successor 1.1).
- **Modalities:** text in → text out (vision input was added only in 1.1); adaptive thinking for repository tasks; tool-using agent loops in the Copilot harness.
- **Pricing (as of 2026-10-09):** prior Copilot list **$0.75 / $0.075 cached / $4.50** per 1M in/cached/out (llm-stats, vs 1.1's $0.20/$0.02/$1.20); retired — no longer purchasable.
- **Architecture:** Microsoft in-house coding model; parameters not published. Trained on production-workflow environments (vendor).

### Raw benchmarks found

(Microsoft launch post / official X account — vendor-reported, Copilot-harness)

Agent / tool use:

- Terminal-Bench 2: **54.8%** (vs Claude Haiku 4.5: 41.6%)
- Tau/GDPval/Claw-Eval: no verified public score found

Coding:

- SWE-Bench Pro: **51.2%** (vs Haiku 4.5: 35.2%, +16 pts)
- SWE-Bench Verified: **71.6%** (vs Haiku 4.5: 66.6%)
- Efficiency: up to **60% fewer tokens** than compared models at equal-or-better pass rates (vendor)
- LiveCodeBench / SciCode / AA Coding Index: no verified public score found (evals.report tracks GPQA/HLE rows but no accessible values)

Reasoning / knowledge:

- GPQA Diamond / HLE rows exist in evals.report tracking but values unverified; no independent suite (AA/Vals) coverage found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. Retired model — scores are historical.

- **Tool use: 68/100.** Terminal-Bench 54.8% with production-harness training and agent loops beats its Haiku rival by 13 pts; capped by vendor-only harness + no MCP/Tau evidence.
- **Reasoning: 55/100.** Nothing public on GPQA/HLE with extractable values; designed for coding pragmatics — knowledge-depth unverified, capped.
- **Context window: 55/100.** Context size unpublished (unverifiable); Copilot-era repo workflows imply a practical window but no number can be scored as verified.
- **Multimodal: 15/100.** Text-only — vision arrived with the 1.1 successor; methodology floor.
- **Coding: 78/100.** SWE-Bench Verified 71.6% / Pro 51.2% cleared Haiku 4.5 on all four vendor core evaluations with up to 60% fewer tokens — a beefy small-coder for mid-2026; capped by vendor-only evidence.
- **Cost efficiency: 78/100.** Drove free-tier Copilot coding at $0.75/$4.50 list; 1.1 undercut it by ~73% and replaced it.
- **Overall Score: 54/100.** Mean of 68/55/55/15/78 = 54.2 → 54. Best fit (historical): everyday Copilot coding loops; today — replaced by MAI-Code-1.1-Flash, which is cheaper, vision-capable, and stronger.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (microsoft.ai launch post, official @MicrosoftAI benchmark thread, llm-stats listing incl. successor-pricing comparison, evals.report tracking page, neura.market index page, abhs.in/stackfutures launch coverage); scores are normalized 1–100 interpretations, not official vendor scores. All headline numbers are vendor-reported and the model is retired.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
