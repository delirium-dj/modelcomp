# Qoder Sonus — findings by Qwen 3.8 Flash

- Source: **Qoder (Alibaba-backed) Sonus** (curated id `qoder/sonus-1.0`; officialUrl `qoder.com`), from Qoder launch coverage (Bit.Fan, Lookonchain, CoinEx feed) and the curated `meta.json`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity + evidence-vacuum note:** Sonus is a **real, shipping proprietary model** — Alibaba-backed agent platform **Qoder launched it ~2026-09-10** as an in-house "Computer Use"-centered model, live across Qoder IDE / CLI / JetBrains plugin / QoderWake / Cloud Agents with a **3.2× billing multiplier** (alongside sibling `Cantus`). Because it *exists and is generally available*, it is **scored, not excluded**. **However**, there are **zero independent benchmarks** — no Artificial Analysis row, no OpenRouter/HF listing, no published parameters, and no Terminal-Bench/SWE-bench/OSWorld absolute for "Sonus." Every capability dim below is therefore a **heavily-discounted, positioning-based estimate**, **not** a measured score. Treat it as provisional and low-confidence. The curated `meta.json` specs (128K / text) are also taken with caution.

## Model card

- **Name:** Qoder Sonus
- **Short description:** Qoder's in-house **computer-operation** model — a long-duration autonomous agent aimed at **coding, financial modeling, research, and spreadsheet/desktop work**, positioned so that it "drives your computer and pro software like a power user." Computer use is the headline capability.
- **Provider / access:** Qoder (Alibaba-backed); embedded in Qoder IDE, CLI, JetBrains plugin, QoderWake, Cloud Agents, and Qoder Desktop 0.2.3+; **3.2× Qoder-credits billing**.
- **Release / knowledge:** **~2026-09-10**; proprietary, undisclosed base; knowledge cutoff not published.
- **IDs:** `qoder/sonus-1.0` (curated).
- **Context window:** **128K (per curated meta)** — *uncorroborated*; long-horizon autonomy is claimed but the window figure is a curated guess, no vendor spec located.
- **Modalities:** **conflict flagged.** Curated meta says **text in/out**, but a "Computer Use" model that "operates professional software" essentially requires **screen/GUI (image) perception** — so a real image-input lane is *implied but unconfirmed*. Scored as a discounted-low multimodal rather than the text-only floor; not rewarded as full vision.
- **Pricing (as of 2026-10-30):** **3.2×** Qoder-credits multiplier (premium; same tier as `Cantus`); no per-token USD rate published.
- **Architecture:** undisclosed (proprietary, in-house); parameters not published.

### Raw benchmarks found

> **Provenance caveat:** **no benchmark of any kind was located for Sonus** — first-party or independent. Nothing below is a measured score; the search only surfaced product/positioning press (Bit.Fan, Lookonchain, CoinEx), not evals.

- Artificial Analysis Intelligence Index — **no entry located**
- Terminal-Bench / OSWorld / SWE-bench / WebArena (computer-use & coding suites) — **no verified public score found**
- τ-bench / BFCL (tool use) — **no verified public score found**
- Vendor model card / tech report with parameter count, context, or eval table — **not found**

### Normalized scores (1–100)

- **Tool use: 70/100.** *Positioning-only.* Computer use is placed "at the center of the model's capabilities" and it operates GUI/pro apps end-to-end — an ambitious, agent-first tool surface — but with **no measured τ-bench/OSWorld/SWE-bench number**, this is a discounted mid-high estimate, not evidence.
- **Reasoning: 60/100.** Aimed at "complex knowledge work, financial modeling, research" — plausible general/agentic reasoning, but **entirely unquantified**; scored mid on role alone with a heavy evidence-vacuum discount.
- **Context window: 58/100.** The curated **128K** is only mid-tier and itself unconfirmed; long-horizon autonomy is *claimed* without a published window or retrieval proof → cautious mid.
- **Multimodal: 42/100.** **Contradiction held, not rewarded:** meta says text-only, yet computer-use implies screenshot/GUI (image) input. Given no confirmation of a native vision lane, it sits modestly above the text-only floor rather than at a true vision tier.
- **Coding: 62/100.** Coding is a named use case and Qoder is an IDE product, so code generation is central to positioning — but there is **no SWE-bench/Terminal-Bench row** to substantiate it → discounted mid.
- **Cost efficiency: 45/100.** A **3.2×** credits multiplier is premium and proprietary (no self-host, no open weights, no cached-rate disclosure) → below-mid value.
- **Overall Score: 58.4/100.** Half-up mean of the five quality dims (70+60+58+42+62)/5 = 58.4 (Cost excluded). **Low-confidence / provisional:** the score rests on **product positioning with zero verified benchmarks**, a **curated-but-uncertain** spec (128K/text vs an implied vision lane), and a premium 3.2× price. Best read: a **computer-use-focused agent model** whose actual capability tier is **unproven** until an independent eval or first-party model card appears.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-30
- Method: public internet research — Qoder launch coverage (Bit.Fan / Lookonchain / CoinEx: **Sonus, ~2026-09-10, computer-use-centered, 3.2× billing, live across Qoder IDE/CLI/JetBrains/QoderWake/Cloud Agents, sibling to Cantus**) plus the curated `meta.json` (`qoder/sonus-1.0`, 128K/text). **No Artificial Analysis row, no OpenRouter/HF endpoint, no benchmark table, and no vendor spec sheet were found** for "Sonus." Because the model is **real and generally available**, it is scored rather than excluded — but every dim carries an **explicit evidence-vacuum discount** and is labeled positioning-based, never measured. The text-vs-computer-use-vision modality conflict is flagged and held (not rewarded). No benchmark absolute was fabricated and no sibling model's numbers were reattributed.
- Revisit trigger: any **Sonus-specific** benchmark (vendor eval table or independent AA/OSWorld/Terminal-Bench/SWE-bench run), an official model card disclosing parameters/context/modality (resolving the text-vs-vision conflict and the 128K figure), or a per-token USD price. Until then the score stays provisional and low-confidence.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
