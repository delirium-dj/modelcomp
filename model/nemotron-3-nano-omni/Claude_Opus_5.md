# Nemotron 3 Nano Omni — findings by Claude Opus 5

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's **open 30B-A3B omni-modal reasoning model** with native vision, audio and text input — and the broadest *measured* modality coverage of any model in this research pass, including a published VoiceBench placement. **Routing note (`RULES.md`):** despite having audio input and a VoiceBench score, this is **not** a voice/speech model and correctly belongs under `model/`: it is not TTS/STT-first, has no realtime voice API, and produces **text output only**; its core capability is general multimodal reasoning with audio as one of four inputs. Distinct model; Nemotron 3 Ultra, Nano 30B, Super and the 3.5 Lightning line are separate entries.
- **Provider / access:** **Open weights** (`NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16`) plus a **free NVIDIA Build API endpoint**. This repo records the local route `opencode/nemotron-3-nano-omni`; **Zen's catalogue does not list it** (Zen's Nemotron entries are Ultra Free and 3.5 Lightning Free).
- **Release / knowledge:** **No explicit release date found** in the sources I consulted; NVIDIA published a dedicated technical report (`NVIDIA-Nemotron-3-Omni-report.pdf`). Knowledge cutoff: no verified public date found.
- **IDs:** `nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16` (Hugging Face). **A genuine free route** via NVIDIA Build, plus free open weights.
- **Context window:** **262,144 tokens (256K)** with **65,536 max output** (this repo's curated metadata; 256K corroborated by [BenchLM](https://benchlm.ai/models/nemotron-3-nano-omni-30b-a3b)).
- **Modalities:** **Text + image + video + audio in → text out.** VoiceBench records its architecture as "**vision audio llm**" with "open" access. No generated media. Reasoning: yes. Tool calls: yes (OSWorld and τ²-bench were run).
- **Pricing (as of 2026-10-08):** **$0** via the NVIDIA Build free API endpoint, plus free open checkpoints. No per-token rate published for paid serving.
- **Architecture:** **30B total / 3B active** (the "30B-A3B" designation), published in **BF16**, with vision and audio encoders feeding a shared LLM. Licence: open weights; the specific licence identifier did not surface in the sources I consulted.

### Raw benchmarks found

> NVIDIA's own technical report supplies most figures; Artificial Analysis measures independently and — unusually for this family — **diverges sharply on GPQA Diamond (72.2% vendor vs 46.9% independent, a 25.3-point gap)**. VoiceBench adds an owner-published speech evaluation. BenchLM covers 29 of 625 benchmarks.

Agent / tool use:

- **OSWorld: 47.4%** ([NVIDIA Nemotron 3 Omni technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Omni-report.pdf))
- **τ²-bench: 45.3%** (NVIDIA technical report)
- GDPval-AA: **416 Elo** / **0.0%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b))
- Terminal-Bench, MCP-Atlas, Toolathlon, BrowseComp, AA Agentic Index: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **77.3%**; **GPQA Diamond: 72.2%** (NVIDIA report) — against **AA-GPQA Diamond 46.9%** (Artificial Analysis), a 25.3-point gap
- AIME 2025: **82.1%** (NVIDIA report)
- **IFBench: 74.2%** (NVIDIA) / **AA-IFBench 63.2%** (Artificial Analysis)
- AA-HLE: **4.8%**; AA-LCR: **39.7%**; **CritPt: 0.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **10.3**; BenchLM overall **31.48/100, rank #164 of 889**
- AA-Omniscience: Index **−57.4**, Accuracy **15.2%**, **Hallucination Rate 85.7%**
- From VoiceBench's owner-published configuration: **IF-Eval 88.66** and **AdvBench 100.00** (safety refusal)

Coding:

- LiveCodeBench v5: **63.2%**; SciCode: **32%** (NVIDIA report)
- AA Coding Index: **13.8%** (Artificial Analysis)
- SWE-bench Verified / Pro, Terminal-Bench: no verified public score found

Multimodal — the model's purpose, and the best-measured dimension in this batch:

- **RefCOCO (average): 90.5%** (NVIDIA report) — referring-expression grounding
- **AI2D_TEST: 88.5%** (NVIDIA report) — diagram understanding
- **CharXiv: 76.3%**; **MMMU: 70.8%** (NVIDIA report); independently **AA-MMMU-Pro 53.2%**
- **Video-MME (without subtitles): 72.2%** (NVIDIA report) — a genuine video result, measured without the subtitle crutch
- **MMLongBench-Doc: 57.5%** (NVIDIA report) — long-document multimodal understanding
- **ScreenSpot Pro: 57.8%** (NVIDIA report) — GUI grounding
- **VoiceBench: overall score 89.39, owner rank #4 of 44** ([VoiceBench](https://matthewcym.github.io/VoiceBench/), snapshot 2026-10-07, one owner-published configuration mapped). BenchLM notes the caveat that open-ended answers use an automatic model judge and the overall score combines heterogeneous task scales by the benchmark owner's method.

Long context:

- **MMLongBench-Doc 57.5%** is a real long-document measurement; **AA-LCR 39.7%** is the quantified long-context reasoning signal and it is weak. No MRCR, RULER or needle-retrieval curve at any depth.

### Normalized scores (1–100)

- **Tool use: 48/100.** **OSWorld 47.4%** is a creditable computer-use result for a 3B-active model, and τ²-bench 45.3% shows functional tool calling. But **GDPval-AA normalizes to 0.0% (416 Elo)** — the floor — and there is no Terminal-Bench or MCP measurement at all. Below the midpoint on the evidence.
- **Reasoning: 54/100.** NVIDIA's figures look respectable (MMLU-Pro 77.3%, AIME 2025 82.1%, GPQA-D 72.2%, IFBench 74.2%), but the **25.3-point GPQA gap against Artificial Analysis's 46.9%** forces me toward the independent reading, and the independent picture is weak throughout: AA-HLE 4.8%, **CritPt 0.0%**, an AA Intelligence Index of 10.3, AA-IFBench 63.2%, and an **85.7% hallucination rate** against 15.2% accuracy. AdvBench 100.00 is a genuine safety strength.
- **Context window: 64/100.** 262,144 tokens with 65,536 output is a solid specification, and **MMLongBench-Doc 57.5%** is a real long-document measurement rather than a bare claim. Held down by **AA-LCR 39.7%** — the weakest long-context reasoning score of any model I have assessed in this pass — and by no retrieval curve.
- **Multimodal: 88/100.** The best-evidenced multimodal profile in this entire research pass, and the only one with **measured audio**: four-way input with **RefCOCO 90.5%, AI2D 88.5%, CharXiv 76.3%, Video-MME 72.2% without subtitles, MMMU 70.8%, ScreenSpot Pro 57.8%, MMLongBench-Doc 57.5%** — grounding, diagrams, charts, video, GUI and long documents all separately measured — plus a **VoiceBench overall of 89.39 at owner rank #4 of 44**. From a 3B-active model this is remarkable. Capped below the 90s by text-only output, by AA-MMMU-Pro landing 17.6 points under NVIDIA's MMMU figure, and by VoiceBench's judge-model and heterogeneous-scale caveats.
- **Coding: 48/100.** LiveCodeBench v5 63.2% is usable, but SciCode 32%, an **AA Coding Index of 13.8%**, and the complete absence of any SWE-bench or Terminal-Bench result leave this below the midpoint.
- **Cost efficiency: 94/100.** **$0 on two routes** — a free NVIDIA Build API endpoint and free open BF16 checkpoints — for a genuinely omni-modal model activating only **3B parameters**, which makes it cheap to serve and realistic to self-host. Getting measured vision, video, GUI *and* speech capability at zero marginal cost is close to the efficiency frontier for multimodal work. Docked for the absence of a published paid-serving rate card or licence identifier, and because 30B of weights must still be resident.
- **Overall Score: 60.4/100.** Mean of the five non-cost dims (48 + 54 + 64 + 88 + 48) / 5 = 60.4. Best fit: **free, self-hostable omni-modal perception** — image grounding, diagram and chart reading, subtitle-free video understanding, long-document analysis, GUI localisation and speech input — where its 88-point multimodal profile is genuinely class-leading at 3B active parameters. Do not use it for coding (AA Coding Index 13.8%), autonomous agency (GDPval 0.0% normalized), long-context reasoning (AA-LCR 39.7%) or unverified factual output (85.7% hallucination rate), and treat NVIDIA's GPQA figure with caution given the 25-point independent shortfall.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated Nemotron 3 Nano Omni page (29 of 625 benchmarks) and the underlying sources it cites: NVIDIA's own Nemotron 3 Omni technical report for the OSWorld, τ²-bench, MMMU, CharXiv, AI2D, RefCOCO, Video-MME, MMLongBench-Doc, ScreenSpot Pro, MMLU-Pro, GPQA, AIME, IFBench, LiveCodeBench and SciCode figures; the Artificial Analysis leaderboards for the independent GPQA Diamond, HLE, LCR, CritPt, IFBench, Intelligence Index, Omniscience, Coding Index, MMMU-Pro and GDPval measurements; and the **VoiceBench** owner-published evaluation (overall 89.39, rank #4 of 44, IF-Eval 88.66, AdvBench 100.00, "vision audio llm" architecture, 2026-10-07 snapshot) together with BenchLM's stated caveats about its model-judge scoring and heterogeneous task scales. The OpenCode Zen catalogue was checked and lists Nemotron 3 Ultra Free and Nemotron 3.5 Lightning Free but not this model. The 25.3-point GPQA Diamond divergence between NVIDIA (72.2%) and Artificial Analysis (46.9%) is reported in full and the independent figure weighted. Per `RULES.md` voice routing, the presence of audio input and a VoiceBench score was evaluated explicitly and the model confirmed as belonging under `model/` rather than `models_voice/`, on the grounds that it is not TTS/STT-first, has no realtime voice API, and emits text only. No release date was published on the sources consulted, so none is asserted. No data was imported from Nemotron 3 Ultra or Nemotron 3.5 Lightning, which have their own folders. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
