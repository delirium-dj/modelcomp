# Gemini 3.5 Flash — findings by Space Bunny

- Source: Google (`gemini-3.5-flash`; reasoning configuration)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's GA Flash-tier natively multimodal reasoning model of the Gemini 3.5 generation (released 2026-05-19, Google I/O 2026); designed for sub-agent deployment, MCP tool orchestration, multi-step agentic workflows, and rapid coding iteration. Deprecated on 2026-10-08 — superseded by Gemini 3.6 Flash, with Gemini 3.8 Flash recommended for new work.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`, 123 pinned versions), Google AI Studio, Gemini Enterprise, Gemini app and Search AI Mode at launch.
- **Lifecycle:** **Deprecated (2026-10-08).** Google routes all `gemini-3.5-flash` requests to `gemini-3.6-flash`; the documented replacement string is `gemini-3.6-flash` (or `gemini-3.8-flash`). No shutdown date announced — the endpoint still serves traffic, but it is not selectable going forward.
- **Release / knowledge:** Released 2026-05-19; latest calendar update May 2026. Knowledge cutoff January 2025 (in line with the Gemini 3 model family).
- **IDs:** `gemini-3.5-flash`; repository family metadata identifies `google/gemini-3.5-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-10-10).
- **Modalities:** Text, image, video, audio, and PDF input; text output only (no image or audio generation). Function calling, code execution, structured outputs, URL context, search grounding, and thinking levels supported.
- **Caveat:** Native computer use is **not** available on this model ID — Google directs browser/desktop automation needs to `gemini-3-flash-preview`.
- **Pricing (as of 2026-09-24, unchanged until deprecation):** $1.50 per 1M input tokens, $9.00 per 1M output tokens, $0.15 per 1M cached input tokens (90% discount). Batch tier halves this ($0.75 / $4.50); priority tier is +80% ($2.70 / $16.20).
- **Architecture:** Proprietary; Google has not disclosed parameter count. Built as a step up from Gemini 3 Flash with configurable thinking levels.

### Raw benchmarks found

Vendor-reported (Google DeepMind Gemini 3.5 Flash model card, May 2026; results are as-of-May-2026 self-computations, verified against the Google evaluation methodology PDF):

Agent / tool use:

- MCP Atlas (multi-step MCP workflows, Scale AI leaderboard): **83.6%** — highest value recorded in the field at launch
- Toolathlon (real-world tool use, HKUST): **56.5%**
- OSWorld-Verified (agentic computer use, 5 runs, 1080p): **78.4%**
- Terminal-Bench 2.1 (Terminus-2 harness): **76.2%**
- Finance Agent v2 (vals.ai leaderboard): **57.9%**
- GDPval-AA (Elo, Artificial Analysis leaderboard): **1656**
- Appwrite Arena (191 SDK questions, skills loaded / not loaded): **96.20% / 90.70%**; **20m** duration (Appwrite, May 2026)

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- Humanity's Last Exam (full set, no tools): **40.2%**
- ARC-AGI-2: **72.1%**
- Artificial Analysis Intelligence Index: **55** on Index v4.0 at launch; **33** on Index v4.3.2 (Artificial Analysis, accessed 2026-09-24) — the composite was rebuilt between versions, so the two values are not directly comparable
- LMArena Elo: **1481** at launch window
- Artificial Analysis full Intelligence Index run cost: **$1,552** (5.5× Gemini 3 Flash, +75% vs Gemini 3.1 Pro)

Coding:

- SWE-Bench Pro (Public, single attempt, 5-run average, Antigravity harness): **55.1%**
- SWE-bench Verified: **78%** vendor-reported at I/O; **81.0%** appears in I/O reporting but is **not** on the model card — treat as unconfirmed
- DeepSWE v1.1 (long-horizon software engineering): **37%**
- MLE-Bench (machine learning engineering): **49.7%**
- Vibe Code Bench: **no verified public score found** for this exact model

Long context:

- GDM-MRCR v2 (8-needle): **77.3%** at 128k average; **26.6%** at 1M pointwise — a sharp degradation at full advertised window
- Google verifies 1,048,576-token input and 65,536-token output limits

Multimodal:

- MMMU-Pro (no tools, averaged across Standard 10-option and Vision settings): **83.6%** vendor; **81.2%** appears on some Google-adjacent summaries — tracked discrepancy
- CharXiv Reasoning (no tools): **84.2%**
- Blueprint-Bench 2 (normalized 0–100): **33.6%**

Throughput:

- Output speed: **289 tok/s** (Artificial Analysis, May 2026); **207.8 tok/s** in a later reading (accessed 2026-09-24) — measurement conditions differ, roughly 4× Claude Opus 4.7 / GPT-5.5

Successor comparison (Google DeepMind Gemini 3.6 Flash model card, 2026-07-21, Gemini 3.5 Flash column):

- SWE-Bench Pro 55.1%, DeepSWE 37%, Terminal-Bench 2.1 76.2%, MLE-Bench 49.7%, GDPval-AA 1349 (v2 recalibration — not comparable to the 1656 v1 figure), OSWorld-Verified 78.4%, GDM-MRCR 77.3% @128k / 26.6% @1M

Sources consulted: [Google Gemini 3.5 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash), [Google Gemini API release notes / deprecations](https://ai.google.dev/gemini-api/docs/changelog), [Gemini 3.5 Flash evaluation methodology (PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-5_flash_model_evaluation.pdf), [Introducing Gemini 3.6 Flash (Google Blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/), [Gemini 3.6 Flash model card](https://deepmind.google/models/model-cards/gemini-3-6-flash/), [Vals AI Gemini 3.5 Flash](https://www.vals.ai/models/google_gemini-3.5-flash), [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash), [Appwrite Gemini 3.5 Flash deep dive](https://appwrite.io/blog/post/gemini-3-5-flash-deep-dive), [Google deprecates Gemini 3.5 Flash (AI Index, 2026-10-08)](https://ai.gotry.io/news/2026-10-08-google-deprecates-gemini-3-5-flash), all accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 85/100.** Raised from 79. The model card publishes MCP Atlas **83.6%** (field-leading at launch), OSWorld-Verified **78.4%**, Terminal-Bench 2.1 **76.2%**, and Toolathlon **56.5%**; Appwrite Arena scores **96.2%** with skills loaded. Tool orchestration was the model's clearest strength. Held back from the high 80s because Finance Agent v2 (57.9%) and Toolathlon (56.5%) show real degradation on finance/expert tool chains, and native computer use is absent from this model ID.
- **Reasoning: 85/100.** Raised from 79. GPQA Diamond **90.4%** is frontier-adjacent for this tier, HLE **40.2%** matches the vendor and independent figures, ARC-AGI-2 **72.1%** trails GPT-5.5's 84.6% and Gemini 3.1 Pro's 77.1%. The Jan-2025 knowledge cutoff bites visibly: on Appwrite Arena the model gains +14.4 points on freeform tasks when documentation is supplied in context, and loses most of its TablesDB and CLI accuracy without it.
- **Context window: 93/100.** Slightly reduced from 95. The advertised 1,048,576-token input limit is verified, but GDM-MRCR v2 collapses from **77.3% at 128k** to **26.6% at 1M pointwise**. A very large window with weak full-length retrieval is weaker than a smaller window with proven recall.
- **Multimodal: 94/100.** Slightly reduced from 95. Native text/image/video/audio/PDF ingestion is confirmed, MMMU-Pro **83.6%** and CharXiv Reasoning **84.2%** are strong, and MMMU-Pro was the highest result Artificial Analysis had recorded at launch. Blueprint-Bench 2 at **33.6%** and text-only output keep it just short of the top tier.
- **Coding: 88/100.** Raised from 76 — the largest correction in this report. The prior pass recorded "no verified public score" for SWE and Terminal-Bench; Google's card supplies SWE-Bench Pro **55.1%**, Terminal-Bench 2.1 **76.2%**, DeepSWE v1.1 **37%**, and MLE-Bench **49.7%**. Solid agentic-terminal and iterative coding work, but 55.1% on SWE-Bench Pro trails Claude Opus 4.7 (64.3%) and 37% on long-horizon DeepSWE shows it needs supervision for multi-file work.
- **Cost efficiency: 62/100.** Reduced from 78. $1.50 / $9.00 is ~3× Gemini 3 Flash ($0.50 / $3.00) and made 3.5 Flash the most expensive Flash-tier model Google has shipped; the full Artificial Analysis Index run costs **$1,552**. The 90% cache discount and 289 tok/s throughput partially offset this, but Gemini 3.6 Flash delivers strictly better results for $1.50 / $7.50 with 17% fewer output tokens, so this price point is now obsolete.
- **Overall Score: 89.0/100.** (85 + 85 + 93 + 94 + 88) / 5 = 89.0. Best fit: high-volume MCP sub-agents, multimodal document/chart analysis, and fast iterative coding. **Deprecation is the operative fact** — any request pinned to this ID now silently runs Gemini 3.6 Flash, so select 3.6/3.8 explicitly.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research across Google DeepMind model cards and evaluation methodology PDF, the Gemini API changelog/deprecations pages, the Gemini 3.6 successor card, Artificial Analysis, Vals AI, Appwrite Arena, and secondary aggregators; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.