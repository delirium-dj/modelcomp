# Leanstral 1.5 — findings by MiMo 2.6 Flash

- Source: Mistral AI `leanstral-1-5` (weights `mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5 (`leanstral-1-5`, hosted `labs-leanstral-1-5`) — Mistral's open-weight **Lean 4 proof-engineering code agent**: automated theorem proving, autoformalization, and formal verification of software properties, running inside Mistral Vibe with a verifier called SafeVerify checking every proof against target theorems.
- **Short description:** Successor to Leanstral (26.03) and the headline "proof abundance" release of July 2026: **saturates miniF2F at 100%**, solves 587/672 PutnamBench problems (second only to the proprietary Aleph Prover), sets open-source SOTA on FATE-H/FATE-X, and — beyond benchmarks — **found five previously unknown real bugs while scanning 57 open-source repositories**, which Mistral describes as (to its knowledge) the first automated deductive-verification pipeline at scale without a human in the loop.
- **Provider / access:** Apache 2.0 weights on Hugging Face (`mistralai/Leanstral-1.5-119B-A6B`); free hosted endpoint `leanstral-1-5` / `labs-leanstral-1-5` on La Plateforme (Labs tier, listed price $0); Requesty; self-serve via vLLM (`--tensor-parallel-size 4`, `--attention-backend FLASH_ATTN_MLA`); agent CLI Mistral Vibe (`vibe --agent lean`).
- **Release / knowledge:** **2026-07-02** (MLQ; MarkTechPost 2026-07-03). Knowledge cutoff not published.
- **IDs:** `leanstral-1-5` (Mistral API), `mistral/leanstral-1-5` (Requesty), `labs-leanstral-1-5` (Mistral Docs catalog).
- **Context window:** 256K advertised / 262K in Requesty's catalog / **200K recommended** in Mistral's own usage docs; max output 33K (Requesty, future-stack). Context compaction built in for long proof sessions.
- **Modalities:** text in/out for the Lean workflow. The base checkpoint is "built as part of the Mistral Small 4 family, [which] combines multimodal capabilities" (HF card) — but no vision/audio capability is exposed or benchmarked for Leanstral itself.
- **Pricing (as of 2026-10-27):** **$0** on the hosted Labs endpoint (Requesty shows free in/free out) — **conflict/lifecycle caveat:** Mistral's Docs catalog lists the Labs endpoint with retirement dates 2026-09-29/30, i.e. the free endpoint was scheduled to retire before today; the Apache-2.0 weights remain the durable access route. Self-host: 119B MoE needs 4× datacenter GPUs (vLLM TP-4 recipe). PutnamBench compute cost: **conflict:** Mistral's blog says "about $4 per problem"; the technical report's own table lists **$1.68** — both Mistral numbers, neither independently verified.
- **Architecture:** MoE, **119B total / ~6B active** (Mistral blog: "only 6B active parameters") — **conflict:** the HF repo name and Requesty say **6.5B active** (128 experts, 4 active per future-stack); training = mid-training → SFT → RL with CISPO.

### Raw benchmarks found

(agent / verification — Mistral technical report via MLQ, MarkTechPost, Mistral news post):

- **miniF2F (val + test): 100%** — saturated (high-school-to-olympiad formal math)
- **PutnamBench: 587 / 672** — beats Seed-Prover 1.5-high by 7 problems at ~1/15th the per-problem cost; trails only the proprietary Aleph Prover
- **FATE-H: 87%**, **FATE-X: 34%** — new open-source SOTA (master's- and doctoral-level algebra)
- **FLTEval pass@1: 28.9** (from 21.9 in Leanstral 26.03), **pass@8: 43.2** (from 31.9) — **beats Claude Opus 4.6's 39.6 at pass@8** on real Fermat's-Last-Theorem pull requests, at ~1/7 the cost (MarkTechPost)
- Bug-finding pipeline: **5 previously unknown bugs across 57 open-source repos** (Mistral); future-stack-review's independent read: substantive demonstration, but "independent evaluation has not yet tested" the pipeline, and the model "does not, by itself, choose the right property, guarantee the translation covered the program, or replace human review"

Reasoning / knowledge (general — Requesty catalog):

- MMLU-Pro: **49.1%**; GPQA Diamond: **34.9%** — weak generalist, as expected for a domain-specialized model

Coding (general):

- LiveCodeBench: **9.9%** (Requesty) — near-floor on ordinary competitive programming; all its coding strength is Lean-specific

Long context:

- 256K advertised but 200K recommended; context compaction for long proofs; no MRCR/RULER figure.

### Normalized scores (1–100)

- **Tool use: 70/100.** It is literally an autonomous verification agent — filesystem editing, command execution, context compaction, SafeVerify loops — with a real-world demonstration (5 unknown bugs, 57 repos) that its tool loop produces verified value; capped because no standard agentic benchmark (Terminal-Bench, Tau, GDPval) exists for it and the pipeline lacks independent replication.
- **Reasoning: 65/100.** Extraordinary in-domain: miniF2F 100%, PutnamBench 587/672 and FATE SOTA are olympiad/PhD-level formal reasoning that most frontier models cannot approach; but general reasoning is below average (GPQA Diamond 34.9, MMLU-Pro 49.1) — the score reflects a razor-sharp specialist, not a general reasoner.
- **Context window: 72/100.** 256K–262K advertised with a practical 200K recommendation and native context compaction designed for hours-long proof sessions; no retrieval benchmark exists, and effective length is deliberately capped below the advertised window.
- **Multimodal: 40/100.** Text-only in practice — the Small-4-family multimodal base is not exposed, no vision/audio capability or MMMU-class figure; text-only output.
- **Coding: 68/100.** SOTA-by-a-wide-margin at Lean 4 proof engineering (beats Opus 4.6 on FLTEval pass@8) and demonstrably useful on real repositories — but LiveCodeBench 9.9% shows it is close to useless for ordinary software engineering; a coding score that only makes sense for formal-methods work.
- **Cost efficiency: 88/100.** Free hosted endpoint (while it lasted), Apache 2.0 weights, and ~$1.68–4 per Putnam-level problem vs an estimated $300+ for Seed-Prover 1.5 — 1–2 orders of magnitude cheaper per hard proof; held below 90+ because self-hosting a 119B MoE is datacenter-class compute and the free Labs endpoint was scheduled for retirement 2026-09-30.
- **Overall Score: 63/100.** (70 + 65 + 72 + 40 + 68) / 5 = 63.0 → 63 — best fit: Lean 4 proof engineering and formal verification of software properties where its in-domain dominance and verified-bug pipeline are unmatched at any price; not the pick for general reasoning, ordinary coding, or multimodal work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official Mistral sources first (Leanstral 1.5 news post "Proof Abundance for All", Mistral Docs model catalog and API pricing pages, Hugging Face model card with vLLM recipe), then independent sources (MLQ and MarkTechPost technical-report coverage, future-stack-reviews critical read with the $4-vs-$1.68 cost conflict, Requesty catalog with general benchmarks, Hacker News discussion, amnic/Spheron/cloudZero pricing context); active-parameter and cost conflicts are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
