# Gemini 3 Flash Preview — findings by Space Bunny

- Source: Google (`gemini-3-flash-preview`; OpenCode alias `opencode/gemini-3-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — the official sources are now reachable.** The prior pass recorded "no verified public score found" for nearly every coding and agentic benchmark because the Google model page and PDF were unreachable at the time. Both are live now, and the Gemini 3.5 Flash model card carries a full Gemini 3 Flash comparison column. Official values replace draft-Benchgen figures, and several of them **contradict** those drafts. Overall **86.4 → 88.6**.

## Model card

- **Name:** Gemini 3 Flash Preview
- **Short description:** Google's December 2025 fast multimodal reasoning and agent model, built off the **Gemini 3 Pro reasoning foundation** with configurable thinking levels to trade quality against cost and latency. Shipped as the default model in the Gemini app and AI Mode in Search. **Superseded and deprecated** — three Flash generations later (3.5 → 3.6 → 3.7 → 3.8), now routed to `gemini-3.6-flash` alongside 3.5 Flash.
- **Provider / access:** Google Gemini API (`gemini-3-flash-preview`); Google AI Studio, Google Antigravity, Vertex AI, Gemini Enterprise, Gemini CLI, Android Studio. Artificial Analysis lists **1 provider**. OpenCode Zen exposes `gemini-3-flash` as a route — **confirm the exact provider variant before comparing runs**, since `gemini-3-flash-preview` and any auto-route differ.
- **Lifecycle:** **Deprecated.** Google lists `gemini-3-flash-preview` as Preview with requests auto-routed to `gemini-3.6-flash`. Artificial Analysis flags it deprecated and only continues benchmarking the default 10k-input-token workload, so its Intelligence Index figure is an *estimate*, not a full run.
- **Release / knowledge:** Released **2025-12-17**; model card published December 2025. **Knowledge cutoff 2025-01-31** (published by Artificial Analysis and verdictpal; the official Google model page still shows none).
- **IDs:** `gemini-3-flash-preview` (Google); `opencode/gemini-3-flash` (repository route).
- **Context window:** **1,048,576 input tokens; 65,536 output tokens** (Google Gemini API documentation, verified). Artificial Analysis independently reports 1M total.
- **Modalities:** Text, image, video, audio, and PDF input; **text output only**. Thinking levels, code execution, computer use, function calling, structured outputs, URL context, and search grounding supported. Audio generation, image generation, and the Live API are **not** supported on this model. Artificial Analysis independently confirms text/image/speech/video in, text out. Audio input is billed separately at **$1.00 per 1M**.
- **Pricing (as of 2026-10-10):** **$0.50 per 1M input / $3.00 per 1M output** (Google's launch pricing, unchanged). Artificial Analysis adds a 90% cache discount and a $0.43 blended rate. Cost per Intelligence Index task and verbosity are **N/A** — a direct consequence of deprecation, since only the default workload is still measured.
- **Architecture:** Proprietary; Google has not disclosed parameter count. Uses **30% fewer tokens on average than Gemini 2.5 Pro** on typical traffic at the highest thinking level, and runs ~3× faster than 2.5 Pro per Artificial Analysis benchmarking.

### Raw benchmarks found

**Official — Gemini 3 Flash launch blog (2025-12-17) and model card PDF:**

- GPQA Diamond: **90.4%**
- Humanity's Last Exam: **33.7% without tools**
- MMMU-Pro: **81.2%** — state-of-the-art at launch, comparable to Gemini 3 Pro
- SWE-bench Verified: **78%** — outperforming the entire 2.5 series **and Gemini 3 Pro**
- Pricing: $0.50 / $3.00 per 1M (audio input $1.00)

**Official — Gemini 3 Flash column from the Gemini 3.5 Flash and Gemini 3.6 Flash model cards (Google DeepMind), with third-party provenance where noted:**

| Benchmark | Gemini 3 Flash | Provenance |
| --- | --- | --- |
| Terminal-Bench 2.1 (Terminus-2) | **58.0%** | Google self-computed |
| SWE-Bench Pro (Public) | **49.6%** | Google self-computed |
| MCP Atlas (multi-step MCP) | **62.0%** | Scale AI leaderboard |
| Toolathlon (real-world tool use) | **49.4%** | HKUST, benchmark authors |
| OSWorld-Verified (agentic computer use) | **65.1%** | Google self-computed, 5 runs |
| Finance Agent v2 | **42.6%** | vals.ai leaderboard |
| GDPval-AA (Elo) | **1204** | Artificial Analysis leaderboard |
| CharXiv Reasoning (no tools) | **80.3%** | Google self-computed |
| MMMU-Pro (no tools) | **81.2%** | Google self-computed |
| Blueprint-Bench 2 (normalized) | **0.0%** | Andon Labs leaderboard |
| GDM-MRCR v2 (8-needle) | **67.2%** @128k avg; **22.1%** @1M pointwise | Google |
| Humanity's Last Exam | **33.7%** | Google |
| ARC-AGI-2 | **33.6%** | Google |

**Independent (Artificial Analysis and others):**

- Intelligence Index v4.3.2: **26/100 estimated**, rank **#105/216** (reasoning variant) — level with the class median of 26; unchanged across three verification passes (2026-09-24 → 09-29 → 10-10). SWEN.AI lists **35** for the non-reasoning variant — configuration difference, not a conflict.
- **AA Terminal-Bench (Hard/Verified): 31.82%** — rank #129/167 (verdictpal, 2026-09). SWEN.AI lists 32.0.
- **AA MMLU-Pro: 88.2%** — rank **#6 of 340** (Sophon)
- **AA GPQA Diamond: 81.2%** — rank #133/184. **Conflicts with Google's 90.4%; see notes.**
- **AA HLE: 14.0%** (SWEN) / 15 (Sophon) — rank #146/186. **Conflicts sharply with Google's 33.7%.**
- **AA-LCR: 48.0%** — rank #156/184
- LiveBench **77.8** (Language 84.6, Data Analysis 74.8, Coding 73.9, Instruction Following 74.9); LiveCodeBench **80**; SciCode **50**; FrontierMath **35.6**; Math **84.2**; IFBench **55.0**
- SWE-bench Verified **75.8%** (Sophon) — below Google's 78%; SWE-bench Multilingual **72.7%**
- Output speed **196.0 tokens/s**, TTFT **6.71s** (Artificial Analysis, 2026-09-29); 165.7 and 194 tok/s on other trackers — measurement drift only.

**Conflicts retained, not averaged:**
- **GPQA Diamond: Google 90.4% vs. Artificial Analysis 81.2%** — a 9.2-point gap between vendor and independent runner.
- **HLE: Google 33.7% (no tools) vs. AA 14.0% vs. draft Benchgen 43.5%** — a three-way spread. The **draft Benchgen figure the prior pass relied on is the outlier and is now discarded**; Google's own 33.7% is the authoritative vendor number.
- **SWE-bench Verified: Google 78% vs. Sophon 75.8%** — small, within harness variance.

Sources consulted: [Gemini 3 Flash Model Card (Google DeepMind PDF, December 2025)](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Flash-Model-Card.pdf), [Introducing Gemini 3 Flash (Google Blog, 2025-12-17)](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/), [Gemini 3.5 Flash model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) and [Gemini 3.6 Flash model card](https://deepmind.google/models/model-cards/gemini-3-6-flash/) (Gemini 3 Flash comparison columns), [Gemini API changelog / deprecations](https://ai.google.dev/gemini-api/docs/changelog), [Google Gemini 3 Flash Preview documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview), [Artificial Analysis Gemini 3 Flash Preview (Reasoning)](https://artificialanalysis.ai/models/gemini-3-flash-reasoning), [verdictpal](https://verdictpal.com/models/gemini-3-flash), [Sophon](https://sophon.at/models/gemini-3-flash), [SWEN.AI](https://swen.live/benchmark/google-gemini-3-flash), and [llmbusse](https://llmbusse.org/models/gemini-3-flash), accessed 2026-10-10. Draft-Benchgen figures are cited only where labelled as such.

### Normalized scores (1–100)

- **Tool use: 85/100.** Raised from 78. The official comparison column supplies what the prior pass could not: Terminal-Bench 2.1 **58.0%**, MCP Atlas **62.0%**, Toolathlon **49.4%**, OSWorld-Verified **65.1%**, Finance Agent v2 **42.6%**, GDPval-AA **1204 Elo**. Artificial Analysis independently measures Terminal-Bench Hard at **31.82%**. Held to the mid-80s because GDPval-AA at 1204 is the weakest knowledge-work Elo of any model in this dataset, Terminal-Bench 2.1 at 58.0% is well behind Gemini 3.5 Flash's 76.2%, and Toolathlon at 49.4% is barely above Gemini 3 Pro's level on a different harness.
- **Reasoning: 84/100.** Raised from 82. GPQA Diamond **90.4%** is Google's official figure, though Artificial Analysis measures **81.2%** independently. MMLU-Pro **88.2%** ranks **#6 of 340**. HLE is the weak spot: Google's own **33.7%** without tools is roughly half of Gemini 3.5 Flash's 40.2% and far below Gemini 3.1 Pro's 44.4%. **ARC-AGI-2 at 33.6%** is the clearest ceiling — Gemini 3 Pro scores 98% ARC-AGI-1 territory and Gemini 3.1 Pro reaches 77.1% on ARC-AGI-2, so this model's abstract reasoning is a full generation behind. The AA Index of 26 sitting exactly at the class median reflects that.
- **Context window: 93/100.** Reduced from 95. The 1,048,576-token input limit is officially confirmed, but Google publishes its own retrieval curve: GDM-MRCR v2 **67.2% at 128k** collapsing to **22.1% at 1M pointwise**. Independent AA-LCR measures only **48.0%**. A large window with weak full-length retrieval is worse than a smaller window with proven recall, and this is the same failure pattern Gemini 3.5 Flash shows.
- **Multimodal: 95/100.** Unchanged. Native text, image, video, audio, and PDF input with text output, independently confirmed by Artificial Analysis. MMMU-Pro **81.2%** was state-of-the-art at launch and CharXiv Reasoning **80.3%** is solid. The **Blueprint-Bench 2 score of 0.0%** is the one hard zero in the whole dataset and keeps this from the top of the tier.
- **Coding: 86/100.** Raised from 82. **SWE-bench Verified at 78% is now officially sourced** — Google's launch post states it explicitly, and it beats Gemini 3 Pro. LiveCodeBench **80**, SciCode **50**, SWE-bench Multilingual **72.7%**, and Google's own SWE-Bench Pro **49.6%** fill out the picture. Held at 86 because Sophon's independent SWE-bench Verified run reads **75.8%**, Terminal-Bench 2.1 at 58.0% and Terminal-Bench Hard at 31.82% show real limits on agentic terminal work, and the model has been two Flash generations behind since.
- **Cost efficiency: 86/100.** Reduced from 88. **$0.50 / $3.00 with 30% fewer tokens than 2.5 Pro remains genuinely cheap**, and audio input at $1.00 is transparent. But Artificial Analysis now reports **cost-per-task and verbosity as N/A** because deprecation means only the default workload is measured — the cheapest-looking model in this set now carries the *least* cost evidence. Gemini 3.6 Flash delivers strictly better results for $1.50/$7.50 with 17% fewer output tokens, and Gemini 3.5 Flash-Lite runs at $0.30/$2.50, so this rate card is obsolete even though it is still cheap.
- **Overall Score: 88.6/100.** (85 + 84 + 93 + 95 + 86) / 5 = 443 / 5 = 88.6, up from 86.4. **Best fit:** high-volume multimodal agents and software workflows where Flash-class latency and price matter more than frontier scores — specifically the December-2025-era behavior profile if you have prompts tuned to it. **Deprecation is the operative fact:** requests to `gemini-3-flash-preview` auto-route to `gemini-3.6-flash`, so select 3.6/3.8 explicitly and treat any comparison against this ID as a comparison against 3.6 Flash.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Google's Gemini 3 Flash model card PDF and launch blog, the Gemini 3.5/3.6 Flash model cards' Gemini 3 Flash comparison columns, the Gemini API changelog, plus Artificial Analysis, verdictpal, Sophon, SWEN.AI, and llmbusse; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the previously-cited draft-Benchgen figures (HLE 43.5%, SWE-bench Verified 78%, GPQA 90.4%, MATH 97.5%) were re-checked against Google's own sources. **HLE 43.5% is discarded** — Google's official figure is 33.7% and Artificial Analysis measures 14.0%; the three-way spread is retained as a flagged conflict. SWE-bench Verified 78% is confirmed as an official Google figure. GPQA Diamond retains a 9.2-point vendor-vs-independent split.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Flash_Recheck.md`, using the same headings.