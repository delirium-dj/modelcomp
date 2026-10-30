# Muse Wonder Full — findings by Qwen 3.8 Flash

- Source: Meta **Muse Wonder Full (Max)** (curated id `meta/muse-wonder-full-1.0`), anchored against **Artificial Analysis** (Intelligence Index + GDPval-AA + Terminal-Bench 4.0 lanes), `dev.meta.ai/models/muse-wonder` launch materials, and independent launch coverage (dev.to, mindstudio.ai)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity + provenance note:** `muse-wonder-full` is the **larger/Max variant** of Meta's two-size Muse Wonder family launched **2026-10-12** (the lighter sibling is `muse-wonder`/`muse-wonder-1.0`); it is a **real, independently-ranked flagship**, not a scaffold, so it is scored. **Index-version caveat (per `RULES.md` provenance rule):** Artificial Analysis's *current* Intelligence Index **v5.0** page lists Muse Wonder Full (Max) at **50** (#15/865; class median 30), whereas the launch-window **v4.3.2** reporting placed it at **55.8–56 (#3–#4)**. Both are cited; the v5.0 figure is the newer independent measurement and is weighted as primary, and the earlier #4 placement is retained as context rather than discarded.

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's **frontier heavy-compute "Max" variant** of the Muse Wonder family — a reasoning-always-on, fully multimodal agent model "designed for complex personal and professional agentic tasks," with a native **1M-token** window and elite long-horizon software engineering. The larger/stronger of the two sizes (Full > Wonder).
- **Provider / access:** Meta AI / Meta Superintelligence Labs; Meta Model API + OpenRouter (`meta/muse-wonder`); proprietary, paid-only (Muse Code subscription tiers).
- **Release / knowledge:** **2026-10-12**; proprietary, weights not disclosed; knowledge cutoff not separately published.
- **IDs:** `meta/muse-wonder-full-1.0` (curated); AA lane `muse-wonder-full` (Max); OpenRouter `meta/muse-wonder`.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** **text + image + speech(audio) + video in**, text out — one of the broadest input lanes in the registry; reasoning yes.
- **Pricing (as of 2026-10-30):** reported **$4.00/M input, $20.00/M output** (Opus-5.5-class premium); AA shows **no publicly priced API** on its index lane.
- **Architecture:** proprietary Muse-family frontier MoE; parameter count not disclosed by Meta.

### Raw benchmarks found

> **Provenance:** independent AA ranking is the backbone; Meta's per-suite "tops" claims are vendor-framed and read against the harder composite placements. Index version stated per line.

- **Artificial Analysis Intelligence Index:** **50 (v5.0, current AA page; #15/865, median 30)**; **55.8–56 (v4.3.2 launch window, #3–#4)** — both cited.
- **GDPval-AA (agentic real-world work):** **1,857 Elo** — #2 behind Claude Opus 5.5 (1,866), ahead of Kimi K3.1 Pro (1,846).
- **DeepSWE 1.1 (long-horizon agentic coding):** **79%** (Full) vs 78.8% (smaller Wonder) — **ahead of Claude Opus 5.5's 74.2%**.
- Verbosity: **110M output tokens** to run the AA index vs **73M median** (think-heavy; raises effective cost).
- Terminal-Bench 4.0 / FrontierCode 2.0 / AutomationBench-AA / HLE-Diamond / CritPt v2 folded into the composite (no per-suite absolute independently transcribed for the served endpoint).

### Normalized scores (1–100)

- **Tool use: 87/100.** #2 on GDPval-AA (1,857 Elo) plus AutomationBench/Terminal-Bench in a top-decile composite = elite sustained agentic orchestration; a hair off the peak because the strongest evidence is composite rather than per-task τ²/BFCL absolutes.
- **Reasoning: 86/100.** Well above the class median on both index versions (50 on v5.0 / 55.8 on v4.3.2), reasoning-always-on with a heavy thinking-token budget; tempered to parity-with-Kimi because the current v5.0 measurement sits below the launch-window #4 headline.
- **Context window: 88/100.** Genuine **1M-token** window with multi-modality recall for legal/financial/technical corpora; docked slightly for the absence of a published single-window retrieval score and verbose generation.
- **Multimodal: 84/100.** **Text + image + speech + video** input in one model — among the broadest lanes here; not higher because it is an *understanding* model (no image/audio/video generation surfaced) and lacks a per-modality eval absolute.
- **Coding: 90/100.** **DeepSWE 1.1 79%**, ahead of Claude Opus 5.5 — top-of-field long-horizon repository coding, consistent with its frontier rank; the single strongest verified absolute.
- **Cost efficiency: 55/100.** $4/$20 premium plus 110M-vs-73M verbosity means the *effective* cost per solved task runs high — strong value for the capability tier, not a budget model.
- **Overall Score: 87/100.** Half-up mean of the five quality dims (87+86+88+84+90)/5 = 87.0 (Cost excluded per `RULES.md`). Best fit: frontier multimodal autonomous agents and long-horizon coding/research needing text+image+audio+video grounding over 1M. Provisional on Reasoning: the v5.0 drop to 50 (#15) vs the v4.3.2 55.8 (#4) is an open index-version conflict to reconcile.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-30
- Method: public internet research — **Artificial Analysis** model page (current **v5.0 Index 50**, #15/865, median 30, 110M-token verbosity, text/image/speech/video in, 1M ctx), **GDPval-AA 1,857 Elo** and **v4.3.2 launch placement 55.8–56 / #3–#4** (corroborated by Kimi K3.1 Pro launch cross-comparisons), `dev.meta.ai` / independent launch coverage for **DeepSWE 1.1 79%** vs Opus 5.5 74.2%. The curated `meta.json` matches first-party specs (1M, four-input multimodal, reasoning). Index-version drift is cited per source rather than averaged; Meta's "tops benchmarks" claims are flagged as vendor-framed; no per-benchmark absolute was fabricated. Kept distinct from the lighter `muse-wonder-1.0` sibling (which carries its own signed report).
- Revisit trigger: AA v5.0 exposing individual Muse Wonder Full sub-scores (GPQA/HLE/Terminal-Bench 4.0/FrontierCode 2.0), reconciliation of the v5.0-50 vs v4.3-56 index conflict, or disclosure of parameters/API pricing.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
