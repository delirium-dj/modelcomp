# Union Alpha — findings by Step 5 Preview

- Source: Unbiased / Circuit & Chisel (`union-alpha` — stealth alias of Pareto 26.9)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth alias of **Pareto 26.9**, Unbiased)
- **Short description:** The anonymous OpenRouter stealth model listed 2026-09-16 14:42 UTC and revealed 33 hours later (2026-09-17 23:24 UTC) as Pareto 26.9 by Unbiased — the AI platform of Circuit & Chisel (founded 2025 by former Stripe executives Louis Amira and David Noël-Romas). Pareto is a **blended best-of-N ensemble**: several frontier and open-source models run on each request and the best answer is kept — one model string, one bill, and (unlike a router) it never switches models mid-conversation, so prompt-cache savings survive. It pulled 702B prompt tokens and 9.22B completion tokens during its two-day free stealth window. The free window lasted 33 hours against the announced week.
- **Provider / access:** OpenRouter `stealth/union-alpha` (delisted) → `unbiased/pareto` at $2.50/$7.50; Unbiased's own platform (`pareto`); also seeded through OpenCode's free tier (third-party reported).
- **Release / knowledge:** 2026-09-16 (stealth) / 2026-09-17 (revealed). Knowledge cutoff not disclosed.
- **IDs:** `stealth/union-alpha` (dead), `unbiased/pareto` (OpenRouter), `pareto` (Unbiased).
- **Context window:** 262,144 tokens; 131,072 max output.
- **Modalities:** Text + image in → text out; tools / tool_choice / response_format; five parameters (max_tokens, temperature, top_p, tools, tool_choice).
- **Pricing (as of 2026-10-09):** **$0 during the 33-hour stealth window**; now $2.50 / MTok input, $0.25 cached, $7.50 output (Unbiased positions this as 25% of Fable 5's input price; a modeled multi-step agentic task costs ~$2.03 vs ~$9.70 for Astra). Superseded by Pareto 26.10 Preview (2026-10-01: 69.9% DeepSWE at $0.24/task).
- **Architecture:** Blended ensemble over third-party models (maker does not disclose the underlying set); not a single trained checkpoint.

### Raw benchmarks found

(All five published scores are vendor-reported from the Pareto 26.9 model card against Fable 5.1 / GPT-6 Astra / DeepSeek 4.1 Flash; the DeepSWE run uses a 30-task slice; no composite score, no published task costs, and no independent reproduction yet.)

Coding:

- DeepSWE: **74** — three-way tie with GPT-6 Astra (74) and DeepSeek 4.1 Flash (74); ahead of Fable 5.1's 67
- Terminal-Bench 4.0: **51** (Astra 58, Fable 5.1 56, DeepSeek 4.1 Flash 31)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found**

Reasoning / knowledge:

- HLE (no tools): **49** (Astra 54, Fable 5.1 55, DeepSeek 4.1 Flash 39)
- ArXivMath: **88** (Astra 91, Fable 5.1 72, DeepSeek 4.1 Flash 28)
- GPQA Diamond / AA Intelligence Index / CritPt: **no verified public score found**

Multimodal:

- MMMU-Pro: **78** (Astra 87, Fable 5.1 81, DeepSeek 4.1 Flash 77)

Agentic / tool use:

- Terminal-Bench 4.0 (agentic coding): 51 (above); MCP-Atlas / BrowseComp / GDPval-AA / Toolathlon / Claw-Eval: **no verified public score found**

Long context:

- 262K-token window; MRCR / RULER / AA-LCR: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 4.0 at 51% is top-quartile on the current hard agentic suite (field leaders 55.8–63.6), and the ensemble design layers multiple models' tool competence per request; capped by no published MCP-Atlas/BrowseComp/GDPval/Claw-Eval rows and the fact that tool-use strength is inherited, not native.
- **Reasoning: 84/100.** HLE 49% no-tools and ArXivMath 88% are both frontier-band numbers on vendor runs (HLE 49 vs the 39–55 comparison set); capped by zero independent replication, no AA Intelligence Index entry, and no GPQA/CritPt figure.
- **Context window: 72/100.** 262,144-token window in the 200K–500K band; no MRCR/RULER/AA-LCR figure exists for this blended model, so long-context retrieval is unverifiable.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 78% (between Fable 5.1's 81 and DeepSeek 4.1 Flash's 77); no video/audio input or non-text output.
- **Coding: 88/100.** DeepSWE 74 is a three-way tie for the field lead (Astra and DeepSeek 4.1 Flash) on the model card, with TB4.0 51% well above the open-weight field; capped by the 30-task DeepSWE slice, vendor-only runs, and no SWE-bench Verified number.
- **Cost efficiency: 68/100.** $2.50/$7.50 per MTok (cached $0.25) sits between the methodology's ~$1.25/$4.25 ≈ 88 and ~$3/$15 ≈ 60 tiers; the ~$2.03 modeled task cost (vs Astra's ~$9.70) shows the ensemble's real economic pitch, and the stealth window was $0.
- **Overall Score: 80/100.** Best-fit recommendation: a frontier-class blended coding agent at roughly a fifth of Fable 5's per-token price — strongest on DeepSWE-class agentic coding; validate on your own evals, since every published number is Unbiased's own run with no independent reproduction.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Unbiased Pareto model card, OpenRouter stealth listing + reveal, Capital & Compute, CellCog, HunterAlphaHub, Edge Notes, Ena Pragma); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Pareto_26.10.md`, using the same headings.
