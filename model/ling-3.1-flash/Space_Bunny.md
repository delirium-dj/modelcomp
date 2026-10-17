# Ling 3.1 Flash — findings by Space Bunny

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-3.1-flash`; OpenCode Zen free route `opencode/ling-3.1-flash-free`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-02 (Overall 62).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What this pass changed: four scores up, one sharply down, Overall 62 → 70.** In the 15
> days since the first pass, **every single thing that was "announced but undelivered" has
> now been delivered**, and the first two independent measurements of the model have landed.
>
> | Dimension | Was | Now | Driver |
> |---|---|---|---|
> | Tool use | 78 | **82** | Artificial Analysis **Intelligence Index 41** (comparable median 13); BenchLM agentic lane **62.7, #22 of 128** |
> | Reasoning | 70 | **76** | AA Index 41; **AA-Omniscience 29.1% accuracy / 37.9% hallucination** (first ever for this model); BenchLM overall **68.02, #25 of 954** |
> | Context window | 72 | **93** | **The 1M window is live and independently confirmed** (Artificial Analysis). Weights open under MIT so anyone can verify. |
> | Multimodal | 15 | **15** | Unchanged; AA confirms text-in/text-out |
> | Coding | 76 | **82** | **SWE-bench Multilingual 88.5** (new), **SWE-bench Pro 68.74** (up from 65.39), **Terminal-Bench 4.0 46.03** (up from 40.40) |
> | Cost efficiency | **100** | **72** | **The free trial ended 2026-10-14.** Paid $0.30/$0.90 first-party; **AA measures $1.00 per Intelligence Index task — 3× DeepSeek V4.1 Flash Max's $0.32** — and the model is "very verbose" at 220M output tokens vs a 95M median |
>
> (82 + 76 + 93 + 15 + 82) / 5 = 69.6 → **70**.
>
> **The three promises the first pass flagged as undelivered, all resolved:**
> 1. **The 1M context window shipped** with the paid service. No longer a promise.
> 2. **The weights shipped — MIT licence**, on Hugging Face and ModelScope, first commit
>    2026-10-13, model card updated 2026-10-15. Self-hosting is now possible.
> 3. **The free trial ended 2026-10-14** (the first pass recorded 2026-10-13). The 100/100
>    cost score is therefore gone, and it was carrying a fifth of the previous Overall.

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** inclusionAI's (Ant Group) newest Ling-family fast-tier model — a **560B-total / 25B-active hybrid-linear Mixture-of-Experts** with a native hybrid-reasoning mode, aimed at coding, multi-step analysis, tool-using agents, search, office work and long-horizon agent tasks. **4.5× the total scale of its own predecessor** Ling 3.0 Flash (124B/5.1B). Now open-weights under MIT with a 1M context window. Not an alias of anything in this dataset.
- **Provider / access:** **Open weights: `inclusionAI/Ling-3.1-flash` on Hugging Face (574 GB, MIT, `bailing_hybrid` architecture tag) and ModelScope.** Hosted API via inclusionAI's own first-party endpoint, **OpenRouter** (`inclusionai/ling-3.1-flash`, plus a `:free` variant) and **ZenMux**, and Novita on the Vercel AI Gateway. Free promotional route `inclusionai/ling-3.1-flash-free` is also listed on **OpenCode Zen** as `ling-3.1-flash-free`. Chat Completions style; reasoning and tool calling supported. Recommended self-host: **8 × H200 (TP8 + EP8)** serving `lmsysorg/sglang:dev-ling-3.1-flash` with `--speculative-algorithm NEXTN`, or **4 × GB300 (TP4 + EP4)**.
- **Release / knowledge:** launched **2026-09-30** by inclusionAI (Artificial Analysis records 2026-10-01 as its release date; OpenRouter listed it 2026-10-02). **Weights released 2026-10-14** under MIT. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.1-flash` (weights), `inclusionai/ling-3.1-flash` (OpenRouter / Vercel / Novita), `inclusionai/ling-3.1-flash:free`, `ling-3.1-flash-free` (OpenCode Zen).
- **Context window:** **1,000,000 tokens.** **NEW THIS PASS** — the trial's 256K cap is gone and **Artificial Analysis independently reports a 1M context window** ("~1573 A4 pages"). The prior pass scored the served 262,144 and explicitly declined to score the 1M claim; that claim is now delivered and independently confirmed. **Maximum output 32,768 tokens** at the trial routes. **No MRCR / RULER / GraphWalks retrieval measurement still exists** — the window is a specification, not a measured retrieval result. **Cost caveat that matters more here than the size:** AA measured **220M output tokens** running the Intelligence Index against a class median of 95M, calling the model "very verbose."
- **Modalities:** **text in, text out** — confirmed independently by Artificial Analysis. Reasoning (hybrid instant/reasoning) yes, **on by default and switchable off**; tool calling yes; streaming yes; structured output reported by gateways. Text-only — the multimodal capabilities of sibling Ling variants (Ling 3.0 Flash VL) are explicitly **not** carried over.
- **Pricing (as of 2026-10-17):** **the free trial ended 2026-10-14.** Three paid figures now exist and all are recorded:
  - **inclusionAI first-party API: $0.30 input / $0.90 output per 1M** (Artificial Analysis; blended 7:2:1 = **$0.19/1M**). Artificial Analysis lists only **1 provider**.
  - **OpenRouter and ZenMux: $0.075 / $0.225 / $0.0188 cache read** — exactly 3× the CNY list at ~7 CNY/USD, so the USD figure appears to be the **undiscounted** price.
  - **Ant's own page** (developer.ant-ling.com, updated 2026-10-14) lists **¥0.50 / ¥1.50 / ¥0.125** with a **limited-time 75% discount**, and warns that *"Original prices will gradually resume after the promotional period ends."*
  - Novita via the Vercel gateway was listed at $0.30 / $0.90 on 2026-10-06.
  - **Weights are MIT and free to self-host**, which is now the cheapest route at scale if you have 8 H200s.
  - **Serving-reliability caveat from the trial window:** AI/ML API measured that gateway at **75% uptime over 24h, 45% over 7d, a 33% error rate, and 16.6 tok/s** as of 2026-10-12 — third-party routes during the promo were fragile. Artificial Analysis measures 209.3 tok/s on inclusionAI's own API.
- **Architecture:** **fully documented now, and it was not in the first pass.** Hybrid-linear MoE: **63 KDA (Kimi-Delta-Attention) linear attention layers + 9 gated MLA layers, a KDA:MLA ratio of 7:1**, 4 fully connected layers, **512 routed experts + 1 shared expert, 8 activated per token**, ~560B total / 25B active (the HF repository reports a 574 GB checkpoint; one Tech AI Wire reading of the model page showed "572B"). Native hybrid reasoning. Chat template `bailing_hybrid`. FP8 quantizations and one finetune already exist in the community.
- **LingCode:** Ant's **coding harness built on top of the open-source agent Pi**, designed specifically for long-horizon coding that runs for hours, involves hundreds of tool calls, and needs repeated context compression. **It is the harness behind the revised SWE-bench Pro, Terminal-Bench 4.0 and DeepSWE figures.** Ant says it is *considering* open-sourcing LingCode but **has announced no plan or date** — so those three numbers carry a disclosed first-party-harness advantage.

### Raw benchmarks found

**Official model card, machine-readable `.eval_results/Ling-3.1-flash.yaml`** (HF commit `49e0e59` by SaylorTwift, HF Staff, dated 2026-10-13) — a genuine transparency upgrade over the first pass, where the same numbers existed only as prose in a press table. Values below marked † were **re-run with the LingCode harness**.

- **HLE: 37.44%** — unchanged from the first pass, and still the honest ceiling: it sits *below* DeepSeek-V4.1-Flash (39.20) and GLM 5.3 flash (39.90) in Ant's own comparison table.
- **SWE-bench Multilingual: 88.5%** — **new**, and the highest SWE-bench-family number this model has produced.
- **SWE-bench Pro: 68.74%**† (up from 65.39 in the press table)
- **Terminal-Bench 4.0: 46.03%**† (up from 40.40)
- **Terminal-Bench 2.1: 81.18%** (unchanged, not LingCode-tagged)
- **DeepSWE: 59.7%**† (unchanged) — still well behind DeepSeek-V4.1-Flash's 74.20
- **SkillsBench v1.1: 68.7%** (unchanged)

**NEW — Artificial Analysis, the first independent composite for this model:**

- **Intelligence Index: 41** — "well above average among comparable models, median 13." For calibration in this pass's batch: Claude Opus 5 max is 50, Claude Opus 4.7 max is 41, Kimi K3 is 57, GLM-5 33. **Ling 3.1 Flash scores the same 41 as Claude Opus 4.7 at max effort, at roughly a quarter of the price.**
- **Context window 1M**, text in / text out, reasoning model.
- **$0.30 in / $0.90 out**, blended 7:2:1 **$0.19/1M**.
- **$1.00 per task** to evaluate on the Intelligence Index. AlphaSignal, citing AA, put the same figure at $0.99 and compared it to **DeepSeek V4.1 Flash Max at $0.32** and Gemini 3.8 Flash High at $1.24. **Ling is roughly 3× the cost per task of the cheapest comparable Flash model.**
- **209.3 tokens/s** (class median 106.9), TTFT **1.91s** (median 1.81s).
- **220M output tokens generated on the Index against a 95M median — explicitly flagged "very verbose."** This is the single most decision-relevant independent finding in the file: a 2.3×-median token burn that directly drives the $1.00/task number.
- Available through only **1 provider**; released 2026-10-01.

**NEW — BenchLM now ranks it** (was unranked for lack of comparative evidence in the first pass):

- **Overall 68.02/100, rank #25 of 954**, with **27 of 639** benchmarks covered (17 on the public lane). Confidence flagged **Limited** and the coverage note warns the score is conservative.
- **AA-Omniscience Accuracy 29.1%, Hallucination Rate 37.9%** — the first knowledge-reliability numbers ever published for this model.
- **Agentic public-lane score 62.7 (#22 of 128)**; knowledge category average **63.3**, behind Step 5 Preview's 68.7.
- In head-to-heads it leads Ornith-1.5-397B (68.02 vs 62.33) and Qwen3.5 Flash (68.02 vs 42.81), and trails Step 5 Preview (68.02 vs 69.45) on a **37.4% vs 46.5% HLE gap**.
- Note: BenchLM still lists context as 262K, which is now stale against AA's 1M.

**Retained vendor figures from the first pass** (unchanged, still vendor-only): MCP-Atlas **83.00**, BrowseComp **91.67**, AutomationBench **52.5%**, Finance Agent v2 **57.9%**, MultiChallenge **69.78%**, DRACO **85.49%**, WideSearch **83.32%**, CyberGym **87.90%**, HealthBench Professional **65.35%**, SWE Atlas Codebase QnA **55.9%**.

**AI BENCHY** tracks four effort configurations: **medium #96**, **high #123**, low #252, none #308 — the medium and high placements sit alongside Nemotron 3.5 Super VL (high, #81) and Kimi K3 (max, #93).

**Still absent:** GPQA Diamond, LCR/MLCR, CritPt, Tau3-Banking, Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon, LiveCodeBench, SciCode, Vibe Code Bench, SWE-bench Verified, and any MRCR/RULER/GraphWalks retrieval figure. **No safety evals and no system card** for Ling 3.1 — still true in the MIT release, which is worth flagging on an open-weights model.

### Normalized scores (1–100)

- **Tool use: 82/100.** *(was 78.)* The vendor rows remain strong and still unreproduced — **MCP-Atlas 83.00** and **BrowseComp 91.67** are genuinely excellent browsing and tool-calling numbers, backed by SkillsBench 68.7 and MultiChallenge 69.78 — and this pass adds the first two independent anchors: **Artificial Analysis Intelligence Index 41**, equal to Claude Opus 4.7 at max effort and far above the comparable-price median of 13, and **BenchLM's agentic lane at 62.7, #22 of 128**. Held at 82 rather than higher by three things that did not improve: **AutomationBench at 52.5** and **Finance Agent v2 at 57.9** are still only mid-50s; it still **loses to DeepSeek-V4.1-Flash on MultiChallenge** (69.78 vs 72.12); and there is still **no Tau3-Banking, GDPval-AA, Claw-Eval or Toolathon figure from anyone**.
- **Reasoning: 76/100.** *(was 70.)* Genuinely upgraded by the arrival of independent measurement. **AA Intelligence Index 41** with a comparable median of 13 is the strongest single new number, and it places a 25B-active model level with far larger peers. **AA-Omniscience 29.1% accuracy at a 37.9% hallucination rate** is the first reliability data ever published for it and is a middling-but-honest profile. BenchLM's overall **68.02 at #25 of 954** corroborates. Capped at 76 rather than 85 by the fact that **HLE is still 37.44 and has not moved** — still below both flash-tier models in Ant's own table — and that **GPQA Diamond, CritPt and LCR still do not exist** for this model, so the knowledge anchor set is still the thinnest part of an otherwise strong profile.
- **Context window: 93/100.** *(was 72 — the single largest change in this file.)* The **1M-token window is live**, independently confirmed by Artificial Analysis, and — critically — **verifiable by anyone**, because the MIT weights are public. The prior pass scored the served 262,144 and explicitly declined to score the undelivered 1M claim; that reasoning no longer applies. Tier mapping puts ≥1M in the 95–100 band, and this is scored at 93 rather than in it for one specific and honest reason: **still no MRCR / RULER / GraphWalks retrieval measurement exists at any length**, so the window remains a specification rather than a demonstrated capability. A second, cost-specific reason is recorded above: **the model is "very verbose" at 220M output tokens against a 95M median**, which makes a 1M window expensive to fill repeatedly. Max output of 32,768 is comfortable for agentic work.
- **Multimodal: 15/100.** *(unchanged.)* **Text-only in and out**, now confirmed by a second independent source — Artificial Analysis states "text input, outputs text" and classifies the model as text-only. Vision exists in the sibling Ling 3.0 Flash VL and Ling 3.0 Tiny but is explicitly not a capability of this model. No vision benchmark exists because there is no vision input.
- **Coding: 82/100.** *(was 76.)** Materially improved on the model's own published numbers: **SWE-bench Multilingual 88.5** is new and high, **SWE-bench Pro rose to 68.74** and **Terminal-Bench 4.0 rose to 46.03**, both flagged as LingCode-harness runs — a disclosed first-party advantage, since LingCode is Ant's own agent framework and Ant says nothing here has been third-party reproduced. **Terminal-Bench 2.1 81.18** held steady. Held below 85 by **DeepSWE still at 59.7**, well behind DeepSeek-V4.1-Flash's 74.20, by **SWE Atlas Codebase QnA at only 55.9**, by the absence of any **SWE-bench Verified, LiveCodeBench, SciCode or Vibe Code Bench** figure, and by the fact that the three improved numbers come from the vendor's own harness on a model whose weights shipped 14 days ago and which nobody has yet re-run.
- **Cost efficiency: 72/100.** *(was 100 — the single largest change in this file.)* **The free trial ended 2026-10-14**, and that 100/100 was carrying a fifth of the previous Overall. Paid pricing is genuinely cheap in absolute terms — **$0.075 / $0.225 on OpenRouter and ZenMux**, $0.30 / $0.90 on the first-party API, blended 7:2:1 at **$0.19/1M** — and the **MIT weights are free** if you can field 8 H200s. But three measured facts pull it well below the top band. **Artificial Analysis puts cost per Intelligence Index task at $1.00, against $0.32 for DeepSeek V4.1 Flash in Max mode** — roughly 3× the cheapest comparable Flash model, which is the comparison a buyer of a "Flash" tier actually makes. The cause is visible in the same AA record: **220M output tokens generated against a 95M class median, explicitly labelled "very verbose."** And **Ant's own pricing page warns the 75% discount is temporary and "original prices will gradually resume,"** so the $0.075/$0.225 figure is a promo rate, not a floor. Scored 72, not lower, because $0.19/1M blended is objectively among the cheapest in this dataset and MIT weights make the marginal cost zero at scale.
- **Overall Score: 70/100.** *(was 62.)* Mean of the five quality dims (82 + 76 + 93 + 15 + 82) / 5 = 69.6 → **70**. Best fit, substantially rewritten: **an open-weights MIT MoE for teams who want a 1M-context agentic coding and research model they can audit, fork and self-host**, and who will pay ~$1 per benchmark task to have it. The profile is now genuinely competitive — an Artificial Analysis Index of 41 matches Claude Opus 4.7 at max effort, BenchLM ranks it #25 of 954, and SWE-bench Multilingual at 88.5 leads its flash-tier field. Three constraints keep it from the top band: **the 15/100 text-only multimodal floor**, **the unchanged HLE 37.44 reasoning ceiling**, and **a verbosity problem that makes it ~3× the cost per task of DeepSeek V4.1 Flash Max** despite a lower sticker price. **Also flag for any adopter: there is still no system card and no safety evaluation for this model**, which is a real gap on an MIT release that anyone can now run without asking Ant anything.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: **second pass**, public internet research, independent of peer findings. Four searches. **New sources this pass:**
  - **[Artificial Analysis `ling-3-1-flash`](https://artificialanalysis.ai/models/ling-3-1-flash)** — the load-bearing addition and the **first independent composite for this model**: **Intelligence Index 41** against a comparable median of 13, **1M context window** confirmed, $0.30/$0.90 with a $0.19 blended rate, **$1.00 per Intelligence Index task**, **209.3 tok/s**, TTFT 1.91s, one provider, and the explicit "very verbose" flag at **220M output tokens against a 95M median**.
  - **[inclusionAI/Ling-3.1-flash on Hugging Face](https://huggingface.co/inclusionAI/Ling-3.1-flash)** and its **`.eval_results/Ling-3.1-flash.yaml`** (commit `49e0e59`, 2026-10-13) — the machine-readable evaluation file, yielding **SWE-bench Multilingual 88.5**, **SWE-bench Pro 68.74**† and **Terminal-Bench 4.0 46.03**† (both LingCode-harness tagged), HLE 37.44, Terminal-Bench 2.1 81.18, DeepSWE 59.7, SkillsBench 68.7. Also the MIT licence, 574 GB checkpoint, `bailing_hybrid` tag, and the 8×H200 SGLang/NEXTN serving recipe.
  - **[Gate News](https://www.gate.com/news/detail/ant-groups-inclusionai-releases-ling-31-flash-weights-free-trial-ends-oct-24989867)** (2026-10-13) and **[techaiwire.com](https://techaiwire.com/articles/ling-3-1-flash-open-weights-560b-mit-ant-group/)** (2026-10-17) — the weights release on **2026-10-14 under MIT**, the **free trial ending 2026-10-14**, and the full architecture: **63 KDA linear attention layers + 9 gated MLA layers at 7:1, 4 FC layers, 512 routed experts + 1 shared, 8 active per token, 560B/25B**, plus the LingCode-on-Pi long-horizon harness and Ant's non-commitment to open-sourcing it.
  - **[developer.ant-ling.com pricing](https://developer.ant-ling.com/en/docs/models/price/)** (last updated 2026-10-14) — the official **¥0.50 / ¥1.50 / ¥0.125** list with a **limited-time 75% discount** and the explicit warning that original prices resume after the promo; and the OpenRouter/ZenMux **$0.075 / $0.225 / $0.0188** figures.
  - **[benchlm.ai/models/ling-3-1-flash](https://benchlm.ai/models/ling-3-1-flash)** and its comparison pages — the model is **no longer unranked**: **68.02/100, #25 of 954, 27 of 639 benchmarks, Limited confidence**; **AA-Omniscience 29.1% accuracy / 37.9% hallucination rate**; agentic lane **62.7 (#22/128)**; knowledge category 63.3.
  - **[aimlapi.com/models/ling-3-1-flash](https://aimlapi.com/models/ling-3-1-flash)** — the trial-window serving-reliability data (75%/45% uptime, 33% error rate, 16.6 tok/s as of 2026-10-12) and confirmation that weights were unpublished at the time of writing.
  - **[AI BENCHY](https://aibenchy.com/)** leaderboard — four Ling 3.1 Flash configurations at medium #96, high #123, low #252, none #308.
  - Retained from the first pass: inclusionAI's launch benchmark table as reproduced by ThreatFrontier and Build Fast with AI, the Vercel/OpenRouter/models.dev spec and pricing records, and the negative findings on BenchLM's absence of an index row and the model's missing safety card.
  - Conflicts recorded: the free-trial end date (2026-10-13 in the first pass vs **2026-10-14** per Ant's own page and Gate News); three paid prices ($0.075/$0.225 vs $0.30/$0.90 vs ¥0.50/¥1.50, with the USD/ZEN relationship noted); **BenchLM's stale 262K context vs AA's confirmed 1M**; and the disclosed LingCode-harness advantage on three of the coding rows. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Vendor-reported figures remain labelled; no vendor number was upgraded to "independently confirmed" except where AA or BenchLM now supplies its own measurement. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one using the same headings. **Re-run this file when:** (1) the 75% promotional discount lapses and Ant's original CNY rates resume — the cost dimension depends directly on it; (2) any third party reproduces the LingCode-harness rows, ideally on a neutral harness; (3) a long-context retrieval benchmark (MRCR/RULER/GraphWalks) is run at 1M, which is the single largest remaining gap in the Context dimension; (4) inclusionAI publishes a system card or safety evaluation; (5) LingCode is open-sourced, which would remove the disclosed harness advantage on SWE-bench Pro, Terminal-Bench 4.0 and DeepSWE.