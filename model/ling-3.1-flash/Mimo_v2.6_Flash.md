# Ling 3.1 Flash — findings by Mimo v2.6 Flash

- Source: Ant Group (InclusionAI)/`inclusionai/ling-3.1-flash`
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's (Ant Group) hybrid-reasoning MoE tuned for coding, multi-step analysis and tool-using agents — ~560B total / ~25B active, roughly 4.5x the scale of Ling 3.0 Flash. Not a variant or alias of another entry.
- **Provider / access:** Vercel AI Gateway (`inclusionai/ling-3.1-flash`, route served by Novita; promo route `inclusionai/ling-3.1-flash-free`) and OpenRouter (`inclusionai/ling-3.1-flash`, Novita, listed Free). OpenAI-compatible Chat Completions endpoints.
- **Release / knowledge:** released 2026-09-29 (InclusionAI launch material, per buildfastwithai) with rollout coverage 2026-09-30 (threatfrontier); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash`; free promo route `inclusionai/ling-3.1-flash-free` (no separate paid ID announced yet).
- **Context window:** 1,000,000 designed per launch material; 262,144 currently served (Vercel AI Gateway / OpenRouter listings) with 32,768 max output; free trial capped at 256K (threatfrontier). Verified via gateway/OpenRouter model pages.
- **Modalities:** text in; text out; hybrid reasoning (switchable thinking/instant); tool calls; implicit caching. Hosted documentation describes it as text-only — no confirmed image input (buildfastwithai).
- **Pricing (as of 2026-10-02):** free during the two-week promo (through 2026-10-13) via Novita on Vercel AI Gateway and Free on OpenRouter; paid price not announced (threatfrontier, buildfastwithai). Caveat: the trial route does not mark prompts as excluded from training and lists no data-residency region — treat as a public endpoint.
- **Architecture:** ~560B total / ~25B active parameters, Mixture-of-Experts, hybrid reasoning. Weights not yet released; Ant plans to open-source when the paid service starts, license not yet named (threatfrontier).

### Raw benchmarks found

> All figures below come from Ant's single launch comparison table (via
> threatfrontier 2026-09-30 and buildfastwithai 2026-10-01) — vendor-reported,
> none independently reproduced as of 2026-10-02.

Agent / tool use:

- MCP-Atlas: **83.00** (Ant launch table)
- BrowseComp: **91.67** (Ant launch table)
- AutomationBench: **52.5%** (InclusionAI launch material, via buildfastwithai)
- SkillsBench: **68.7%** (InclusionAI launch material, via buildfastwithai)
- Finance Agent v2: **57.9%** (InclusionAI launch material, via buildfastwithai)
- Terminal-Bench 2.1: **81.18%** (Ant launch table)
- Terminal-Bench 4.0: **40.40%** (Ant launch table)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **37.44%** (Ant launch table; up from 22.7 on Ling 3.0 Flash)
- MultiChallenge: **69.78%** (Ant launch table)
- HealthBench Professional: **65.35%** (Ant launch table)
- WideSearch: **83.32%** (Ant launch table)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (ModelCap lists no measured evidence yet; its 59.8 index is modeled from the predecessor, not a measurement)

Coding:

- SWE-Pro / SWE-Bench Pro: **65.39%** (Ant launch table; up from 56.6 on Ling 3.0 Flash)
- DeepSWE: **59.70%** (Ant launch table)
- SWE Atlas Codebase QnA: **55.9%** (InclusionAI launch material, via buildfastwithai)
- CyberGym: **87.90%** (Ant launch table)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1M designed, 262K served during trial; no MRCR / RULER / GraphWalks figure published)

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 83.00 and BrowseComp 91.67 show strong MCP/browsing agency; capped by AutomationBench 52.5 and Finance Agent v2 57.9, and every figure is vendor-reported with no independent replication yet.
- **Reasoning: 70/100.** HLE 37.44 plus WideSearch 83.32 lead the flash-tier row of Ant's own table; capped by HLE staying under 40 and no GPQA / Artificial Analysis Index figure published.
- **Context window: 72/100.** 262,144 tokens actually served (Vercel / OpenRouter) maps to the 256K tier; the 1M design is not live — the trial caps at 256K pending the paid service.
- **Multimodal: 15/100.** Text-only serving today; 15 is the text-only floor.
- **Coding: 78/100.** SWE-Pro 65.39 and Terminal-Bench 2.1 81.18 lead the flash tier in Ant's table; capped by DeepSWE 59.70 trailing DeepSeek-V4.1-Flash's 74.20 and Terminal-Bench 4.0 at 40.40.
- **Cost efficiency: 100/100.** $0 during the promo window (Free routes on OpenRouter and Vercel AI Gateway) = 100; paid price not yet announced.
- **Overall Score: 63/100.** Mean of the five quality dims (78 + 70 + 72 + 15 + 78) / 5 = 62.6 → 63. Best fit: a free, fast agentic/coding workhorse for multi-step tool tasks right now; wait for paid pricing, open weights and independent evals before production commitments.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.