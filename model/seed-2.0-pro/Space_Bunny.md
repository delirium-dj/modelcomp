# ByteDance Seed 2.0 Pro — findings by Space Bunny

- Source: ByteDance Seed (`ByteDance/Seed-2.0-pro`; Volcengine Ark `doubao-seed-2-0-pro-260215` / playground `seed-2-0-pro-260328`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, and a correction to the prior pass.** ByteDance's Seed2.0 **product page now exposes the full official evaluation table in machine-readable text**, where the prior pass was transcribing the model-card PDF. That table contradicts the prior transcription on four points, two of them large: **Terminal-Bench 2.0 is 55.8%, not 3.0%**; **HLE (no tool, text only) is 32.4%, not 87.0%**; **SWE Multilingual is 71.7%, not 46.9%**; and **BrowseComp is 77.3%, not 94.2%**. It also supplies ~60 previously unrecorded scores, including a full video suite and an **OSWorld-Verified 78.0%** GUI figure. Separately, **Seed2.1 has shipped**, superseding the family. Net: **Tool use 78 → 86**, **Reasoning 91 → 84**, **Multimodal 95 → 92**, **Coding 87 → 84**, Overall **86.6 → 85.6**.

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance Seed's flagship proprietary multimodal reasoning and agent model, focused on **long-chain reasoning and robustness in complex workflows**. Distinct from Seed 2.0 Lite, Mini, and the code-focused Seed 2.0 Code.
- **Provider / access:** ByteDance Volcengine / Ark ModelArk (`doubao-seed-2-0-pro-260215`); BytePlus international ModelArk; Doubao App; TRAE; DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`, OpenAI-compatible); plus aggregator routes EmpirioLabs AI ($0.63/$3.79), Ofox ($0.67/$3.36), Requesty ($0.50/$3.00, 256K output cap, no structured-output support), and AtlasCloud ($0.50/$3.00).
- **Lifecycle — new this pass:** **Superseded by the Seed2.1 family (Pro and Turbo), which ByteDance lists as its current agent model.** Separately, ByteDance's own Seed2.0 "Try Now" link now points at a **0328 Pro checkpoint** (`seed-2-0-pro-260328`) rather than the 0215 build the evaluation table describes — so even within Seed 2.0, Pro has moved on. No deprecation entry was found for Pro on the BytePlus ModelArk deprecations page.
- **Release / knowledge:** Released **2026-02-14** (official launch; the model card cites a 2026-02-16 leaderboard snapshot). LLM Stats reports a **January 2024** knowledge cutoff; no official cutoff appears in the card, so this remains third-party metadata.
- **IDs:** `ByteDance/Seed-2.0-pro`; `bytedance-seed/seed-2.0-pro`; `volcengine/doubao-seed-2-0-pro-260215`; `seed-2-0-pro-260328`; `deepinfra/ByteDance/Seed-2.0-pro`.
- **Context window:** **256,000 total tokens** with a **128,000-token output limit** on the models.dev / Volcengine record. LLM Stats lists 256K in / 131,072 out for the same hosted route; Requesty advertises a 256,000-token output cap as an outlier route. Discrepancy preserved rather than treated as measured.
- **Modalities:** **Text, image, and video input; text output**, with mandatory internal reasoning. **Pro does not accept audio input** — the Seed2.0 product page's audio-understanding columns (MMSU, WildSpeech, WenetSpeech, Librispeech, Fleurs S2TT) are populated for **Seed2.0 Lite 0428 only** and are blank for Pro. Audio support was added to Lite, not Pro. Tool calling and structured output are supported per models.dev (Requesty is the exception).
- **Pricing (unchanged):** Volcengine Ark **$0.47/M input, $2.37/M output**; DeepInfra, BytePlus, AtlasCloud list **$0.50 / $0.10 cached / $3.00**. Prompts **above 128K rise to $1/M input and $6/M output** on the DeepInfra route. ByteDance's own card Table 1 prices Pro against GPT-5.2 High ($1.75/$14.00) and Claude Opus 4.5 thinking ($5.00/$25.00) — roughly an order of magnitude cheaper.
- **Architecture:** Proprietary; parameter count and checkpoint configuration not published.

### Raw benchmarks found

**Official — Seed2.0 product page evaluation table, Seed2.0 Pro (0215) column.** This is the current machine-readable official table; comparator columns (Seed2.0 Lite 0428 / 0215, GPT-5.4 High, Gemini 3 Flash / 3.1 Pro High) are omitted here.

Knowledge: GPQA Diamond **88.9%** · SuperGPQA **68.7%** · HLE (no tool, text only) **32.4%**

Reasoning: BeyondAIME **86.5%** · FrontierSci-olympiad **74.0%** · Superchem (text-only) **51.6%** · BABE **53.5%**

Instruction following: CL-Bench **20.8%** · MultiChallenge **68.3%**

Search agent: WideSearch **74.7%** · BrowseComp **77.3%** · ResearchRubrics **50.7%** · XPert Bench **64.5%** · FinSearchComp **70.2%** · Tob-Agent **52.6%**

Real world: SkillsBench **42.3%** · **GDPval 54.4%** · MobileWorld **56.4%**

Coding agent: **SWE Multilingual 71.7%** · **SWE-Bench Pro 46.9%** · NL2Repo-Bench **27.9%** · PaperBench **53.8%** · **Terminal Bench 2.0 55.8%** · Vibe Coding (human eval) **48.4%**

GUI: **OSWorld-Verified 78.0%**

STEM (vision): MathVision **88.8** · **MMMU-Pro 78.2** · HiPhO **74.1** · MedXpertQA-MM **68.1**

Perception / knowledge / infographics: BabyVision **60.6** · VLMBias **77.4** · SimpleVQA **71.4** · WorldVQA **49.9** · CharXiv-DQ **93.5** · CharXiv-RQ **80.5** · ERQA **68.5**

Video knowledge: VideoMMMU **86.9** · MMVU **78.2** · VideoSimpleQA-v2 **71.5** · VideoSimpleQA **71.9**

Video reasoning: **VideoReasonBench 77.8** · VideoHolmes **67.4** · Minerva **66.5**

Motion & perception: TVBench **75.0** · TOMATO **59.9** · EgoTempo **71.8** · MotionBench **75.2** · ContPhy **67.4** · Morese-500 **37.4**

Long video: **VideoMME 89.5** · VideoMMEv2 **60.5**\* · CGBench **65.0** · LongVideoBench **80.3** · LVBench **76.4** · VideoEval-Pro **47.3**

Streaming video: OVBench **69.2** · ODVBench **72.5** · LiveSports-3K **78.0** · OVOBench **77.0** · ViSpeak **78.5**

Multi-video / visual-audio: CrossVid **61.0** · OmniVideoBench **49.5** · AVMeme **61.2** · JointAVBench **62.3** · WorldSense **57.0**

\* comparator-derived figure.

**Official — model-card PDF values retained where the product page does not cover the row:**

- Long context: **MRCR v2 (8-needle) 25.0%**; **Graphwalks BFS <128K 73.0%**; **Graphwalks Parents <128K 74.0%**; **LongBench v2 @128K 85.4%**; Frames **37.5%**; DeR2 Bench **77.5%**
- SWE-bench Verified **76.5%**; Multi-SWE-Bench **76.5%**; SWE-Lancer **55.8%**; Scicode **71.7%**; SWE-Evo **48.5%**; Aider Polyglot **8.5%**; ArtifactsBench **80.0%**; SpreadsheetBench Verified **58.0%**
- Search agents (card): BrowseComp-zh **79.1%**; HLE-text **58.4%**; HLE-Verified **77.3%**; DeepSearchQA **54.2%**; Seal-0 **73.6%**
- Tool calling (card): 2-Bench retail **46.9%** / telecom **74.7%**; **MCP-Mark 70.2%**; BFCL-v4 **52.7%**
- LiveCodeBench v6 **86.5%**; Codeforces no-tool Elo **3020**; AetherCode **82.1%**; competitive-programming Pass@8 **73.02%**; Putnam-200 Pass@8 **35.5%**
- MMU-Pro **85.4%**; MathVista **88.8%**; BLINK **79.5%**; DA-2K **92.3%**; HLE-VL **94.2%**; Minedojo-Verified **90.4%**; MM-BrowseComp **53.9%**
- Arena snapshot (2026-02-16): **Vision Arena 3rd overall; Text Arena 6th**
- Card caveat: Graphwalks was tokenized with ByteDance's in-house pipeline, which does not match the official OpenAI tokenization/scoring setup.

**Independent — confirmed absent (re-verified 2026-10-10):**

- **Artificial Analysis carries no model page for Seed 2.0 Pro** — `artificialanalysis.ai/models/seed-2-0-pro` returns **HTTP 404**. There is therefore still no AA Intelligence Index v4.3.2 value.
- **Vals AI has no model page** for Seed 2.0 Pro; the model does not appear in its release feed.
- BenchLM has no page at this slug.
- Net: **every number in this report is vendor-reported.** There is no independent rerun of any Seed 2.0 Pro benchmark anywhere, which is the single largest caveat on this entry.

**Lifecycle benchmark context — Seed2.1 Pro (ByteDance, official), showing the generational gap:**

| Benchmark | Seed2.1 Pro | Seed2.0 Pro (0215) |
| --- | --- | --- |
| Terminal-Bench 2.1 | **71.0** | 55.8 (at 2.0) |
| NL2Repo-Bench | **47.0** | 27.9 |
| ProgramBench | **50.3** | not published |
| SuperGPQA | 70.8 | 68.7 |
| BeyondAIME | 87.0 | 86.5 |
| BabyVision | **73.7** | 60.6 |
| MMMU-Pro | 81.6 | 78.2 |
| ERQA | 72.0 | 68.5 |

Sources consulted: [ByteDance Seed2.0 product page and official evaluation table](https://seed.bytedance.com/en/seed2), [ByteDance Seed2.1 product page and official evaluation table](https://seed.bytedance.com/en/seed2_1), [ByteDance Seed 2.0 Model Card (PDF)](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf), [Artificial Analysis (404 — no page exists)](https://artificialanalysis.ai/models/seed-2-0-pro), [Vals AI model directory (no Seed 2.0 Pro entry)](https://www.vals.ai/models), [BytePlus ModelArk model deprecations](https://docs.byteplus.com/en/docs/ModelArk/1350667), and [models.dev Seed 2.0 Pro](https://models.dev/models/bytedance-seed/seed-2.0-pro/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 86/100.** Raised from 78. The prior pass recorded Terminal-Bench 2.0 at **3.0%**, which drove the low score; the official product table gives **55.8%** and the card's own note says that figure came from a run excluding three environment-incompatible cases on ByteDance's internal agent framework. Newly recorded: **OSWorld-Verified 78.0%**, **GDPval 54.4%**, **BrowseComp 77.3%**, **WideSearch 74.7%**, **FinSearchComp 70.2%**, **XPert Bench 64.5%**, **MCP-Mark 70.2%**, **2-Bench telecom 74.7%**, **Seal-0 73.6%**, **DeepSearchQA 54.2%**. Capped by **SWE-Bench Pro 46.9%**, **NL2Repo-Bench 27.9%**, **BFCL-v4 52.7%**, **2-Bench retail 46.9%**, **SkillsBench 42.3%**, and **ResearchRubrics 50.7%** — the model is far stronger at search and office work than at unattended code or generic tool chains.
- **Reasoning: 84/100.** Reduced from 91. **GPQA Diamond 88.9%**, **BeyondAIME 86.5%**, **FrontierSci-olympiad 74.0%**, and **SuperGPQA 68.7%** are genuinely strong. The reduction is driven by the corrected **HLE (no tool, text only) of 32.4%** — the prior pass recorded **87.0%**, which is inconsistent with every HLE figure for any model in this dataset (the range is 13–50%) and is treated here as a transcription error. The card's separate **HLE-Verified 77.3%** and **HLE-text 58.4%** rows are distinct benchmarks and do not rescue the standard figure. Also held back by **BABE 53.5%**, **Superchem 51.6%**, **CL-Bench 20.8%**, and the complete absence of any independent index.
- **Context window: 82/100.** Unchanged. The 256K advertised limit and **LongBench v2 at 85.4%** support solid mid-range long-context performance, and **Graphwalks BFS/Parents at 73–74%** below 128K is credible. Capped by **MRCR v2 at 25.0%** — the same multi-needle failure mode seen in Gemini 3 Flash and 3.5 Flash — and by the absence of any published successful run at the full API ceiling, so 256K remains an untested claim rather than a measured limit. The Graphwalks tokenization caveat also applies.
- **Multimodal: 92/100.** Reduced from 95. The prior pass credited image and video on general grounds; the official table now provides roughly 35 vision and video scores, and they are excellent: **VideoMME 89.5%**, **VideoMMMU 86.9%**, **LongVideoBench 80.3%**, **VideoReasonBench 77.8%**, **LVBench 76.4%**, **CharXiv-DQ 93.5%**, **MMVU 78.2%**, plus streaming-video (OVBench 69.2, ODVBench 72.5, OVOBench 77.0) and a **Vision Arena 3rd-overall** placement as of 2026-02-16. Reduced because **Pro does not accept audio input** — the family added audio to Lite 0428 only, and every audio and joint-audio-visual row is blank for Pro — because the product table's **MMMU-Pro 78.2** is below the card's **MMU-Pro 85.4%**, and because **MobileWorld is only 56.4%** and **WorldVQA 49.9%**.
- **Coding: 84/100.** Reduced from 87. **SWE-bench Verified 76.5%**, **Multi-SWE-Bench 76.5%**, **LiveCodeBench v6 86.5%**, **Codeforces Elo 3020**, and **competitive-programming Pass@8 73.02%** remain excellent. The reduction reflects the corrected and newly recorded rows: **SWE-Bench Pro 46.9%** (the harder, contamination-resistant variant), **SWE Multilingual 71.7%** (a large upward correction from the prior 46.9%, so the picture is mixed), **NL2Repo-Bench 27.9%**, **Terminal Bench 2.0 55.8%**, **Vibe Coding human eval 48.4%**, **Aider Polyglot 8.5%**, and **SWE-Evo 48.5%**. Seed2.1 Pro has since moved NL2Repo to 47.0 and ProgramBench to 50.3 — a clear acknowledgement of where 2.0 Pro was weak.
- **Cost efficiency: 83/100.** Unchanged. **$0.47/M input and $2.37/M output** on Volcengine, with $0.10/M cached input on the DeepInfra/BytePlus routes, is inexpensive for a frontier multimodal model — ByteDance's own card prices it against GPT-5.2 High at $1.75/$14.00 and Claude Opus 4.5 thinking at $5.00/$25.00. Held below the top band because **prompts above 128K jump to $1/$6**, a 2–2.5× increase, and because aggregator routes vary by up to ~15% on input.
- **Overall Score: 85.6/100.** (86 + 84 + 82 + 92 + 84) / 5 = 428 / 5 = 85.6, down from 86.6. The score is roughly flat because four large corrections landed in opposite directions — Terminal-Bench and BrowseComp were understated before, HLE and the agentic-tool rows were overstated. **Best fit:** search, visual and video analysis, and Chinese-language enterprise office workflows on a tight budget. **Three caveats that matter more than the score:** every benchmark is vendor-reported with **zero independent reruns anywhere**; **Seed2.1 has superseded it**; and the **HLE 87.0% figure carried in the prior revision of this file should not be cited** — the official product table says 32.4%.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of ByteDance's official Seed2.0 product page (full evaluation table), the Seed2.0 model card PDF, the Seed2.1 product page (supersession and generational comparison), and explicit verification that Artificial Analysis and Vals AI carry **no** page for this model; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **four corrections to the prior revision**, all sourced to the now-machine-readable official table: **Terminal-Bench 2.0 3.0% → 55.8%**; **HLE 87.0% → 32.4%**; **SWE Multilingual 46.9% → 71.7%**; **BrowseComp 94.2% → 77.3%**. The prior HLE figure is inconsistent with every HLE value in this dataset and is treated as a transcription error; it should not be reused. **Search-provider rate limiting (HTTP 429) prevented the usual three-search cadence for this entry** — evidence was instead assembled from three independent primary retrievals (Seed2.0 product page, Seed2.1 product page, AA/Vals absence checks) plus the model-card PDF.
- Future sources: add a new file next to this one, e.g. `Seed_2.0_Pro_Recheck.md`, using the same headings.