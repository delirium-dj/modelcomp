# Ling 3.0 Flash Fin (Free tier) — findings by Qwen 3.8 Flash

- Source: InclusionAI / Ant Group via OpenCode Zen (`opencode/ling-3-0-flash-fin-free`) — finance mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Identity note

> **This is the same weights as `ling-3.0-flash-fin`** (sibling folder in this tree), offered on the **$0 OpenCode Zen / Vercel promotional Free tier**. Free-vs-paid here is a **pricing/route difference, not a different model** — same 124 B MoE / 5.1 B active, same 256K–262K context, same benchmark rows. Scoring the identical evidence base; only **Cost efficiency** differs ($0 tier). This is *not* a lineage proxy — it is the identical model on a free route.

## Model card

- **Name:** Ling 3.0 Flash Fin (Free tier) — finance-enhanced MoE, InclusionAI / Ant Group
- **Short description:** Finance-tuned Ling-3.0-flash for source-grounded investment research, valuation modeling, spreadsheet work and long-horizon agents, retaining strong coding/math. This entry scores the **limited-time $0 Zen / Vercel promo route**.
- **Provider / access:** OpenCode Zen Free tier + Vercel promotional tier (limited-time). Paid fallback: DeepInfra/Novita at $0.06/$0.18.
- **IDs:** `opencode/ling-3-0-flash-fin-free` (meta), `opencode/ling-3.0-flash-fin` (paid, same weights).
- **Context window:** **262,144 (256K marketed) / 32K out** (curated meta).
- **Modalities:** **text in/out only.**
- **Pricing:** **$0** Free Zen tier (limited-time promo). **Caveat:** free tiers on Zen/Vercel may train on your prompts / use data for product development — do **not** send confidential financial data. Paid route offers zero-data-retention.

### Raw benchmarks found (exact-ID, same weights as paid `ling-3.0-flash-fin`)

- **Artificial Analysis (independent):** Intelligence Index (prior version) **22.6**, rank **#143/511**, "Efficient" tier · **Long-context reasoning 74 %** · HLE 23 % · HLE-Diamond 5 % · SciCode 42 % · **Terminal-Bench 4.0 0 %** · GDPval 30 % · GDP.pdf 5 % · AutomationBench 7 % · Briefcase Elo 959.
- **Finance-domain (InclusionAI vendor, not independently reproduced):** FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking.

### Normalized scores (1–100)

> Same evidence as the paid folder; only Cost changes. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 48/100.** Weak general agentic rows (AutomationBench 7 %, GDPval 30 %, Terminal-Bench 0 %); finance-agent strength is vendor-only, not credited.
- **Reasoning: 52/100.** Efficient-tier general reasoning (Index 22.6, HLE 23 %) with a genuinely strong **74 % long-context reasoning** row.
- **Context window: 72/100.** 262K → 200K–500K band (65–84); 72.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 55/100.** SciCode 42 % respectable, agentic coding capped by Terminal-Bench 0 %.
- **Cost efficiency: 100/100.** **$0 Free Zen tier** = 100 — but **time-limited and carries the training-data caveat**; paid fallback ($0.06/$0.18) would score ~96. Excluded from Overall.
- **Overall Score: 48/100.** Mean of Tool 48, Reasoning 52, Context 72, Multimodal 15, Coding 55 = 242/5 = 48.4 → **48**. Same as the paid weights — the $0 tier changes only cost, not capability. Cheap finance-focused pick for investment-research/document work when the promo is live; not a general agentic/coding model, and never for confidential data on the free route.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (Artificial Analysis rows via Opper for `ling-3-0-flash-fin`, OpenCode Zen / Vercel free-tier listings + HF/ModelScope cards). Confirmed **free-vs-paid are identical weights** → scored the shared exact-ID evidence; only Cost diverges ($0 = 100). Flagged on record: (a) **$0 tier is a limited-time promo with a training-data privacy caveat** — not for confidential financial data; (b) **general-rubric misfit** for a domain specialist — low Overall is honest; (c) finance-benchmark leadership is vendor-stated, not reproduced.
- Revisit trigger: the free promo ends or changes data-use terms (Cost/notes update); or independent finance-benchmark rows appear for the exact ID.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
