# Inkling — findings by Muse Spark 1.2

- Source: Thinking Machines Lab / Inkling (thinkingmachines/Inkling, 975B MoE, 41B active)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab 975B/41B-active MoE open-weights generalist — 1M context, controllable thinking effort (0.2–0.99), pretrained on 45T tokens text/image/audio/video; breadth across text, agentic, vision, audio.
- **Provider / access:** Thinking Machines Tinker / Hugging Face `thinkingmachines/Inkling` (also NVFP4), Baseten/Fireworks/Together/DeepInfra/OpenRouter `thinkingmachines/inkling` — API IDs above. OpenCode Zen `opencode/Inkling` (paid, meta.json no Free ID true? actually standard pricing).
- **Release / knowledge:** Released 2026-07-15 (thinkingmachines.ai news/introducing-inkling, Artificial Analysis Jul 15); knowledge cutoff not disclosed, approx mid-2026.
- **IDs:** `thinkingmachines/Inkling` (Hugging Face), `opencode/Inkling`
- **Context window:** 1,048,576 tokens (1M) — verified via blog, Sebastion Raschka architecture notes, models.dev providers (1,048,576); trajectory limit 256K for coded evals; Tinker options 64K/256K.
- **Modalities:** Text, image, audio, video in (pretrained on all), speech input per AA; text out; reasoning yes (controllable effort); tool calls; structured output; audio MC/MMAU/VoiceBench support.
- **Pricing (as of 2026-09-25):** **$1.00 / $4.05** per 1M input/output (OpenRouter, Baseten, Fireworks, Hugging Face), cached $0.17; Thinking Machines official $1.87/$4.68 (65K window); 50% launch discount per thinkingmachines.ai (limited time). Source: models.dev pricing table, together.ai, baseten.co, thinkingmachines docs. Paid; no free tier.
- **Architecture:** 975B total / 41B active MoE, 1T-class, short convolutions per block, learned relative-position bias (no RoPE), local-global attention; open weights (NVFP4 available).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Best Harness, internal, effort 0.99, 256K trajectory, contamination 0-scored): **63.8%** (thinkingmachines.ai benchmark table, Hugging Face Inkling-NVFP4 eval; vs Nemotron 56.4, GLM-5.2 82.7, GPT-5.6 Sol 89.5 at 0.99)
- Tau3 Banking (Tau 3 Banking): **23.7%** (thinkingmachines table; vs Kimi K2.6 20.6, GLM-5.2 26.8, Opus-like GPT 33.0)
- Toolathlon Verified: **45.5%** (table; vs GLM-5.2 59.9, Claude Fable 76.4)
- MCP Atlas (agentic general): **76.0%** (intro table) / **74.1%** (HF table) — median ~75% (vs Kimi K2.5 64, GLM-5.2 77.8, Fable 83.3)
- GDPVal-AA v2 (AA v2): **1238** (table; vs Nemotron 1164, Kimi K2.5 1009, GLM-5.2 1514, Fable 1760)
- BrowseComp w/ ctx management: **77.1%** (table; vs Gemini 85.9, GPT Sol 89.4-90.8)
- AutomationBench-AA / AA-Briefcase: represented in AA Index but per-eval not extracted — **no isolated % found** beyond composite AA Index 25

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (thinkingmachines table, Sebastion Raschka note; vs GLM-5.2 89.5, Gemini 94.1, Fable 92.6)
- HLE (Humanity's Last Exam): **29.7% text only / 46.0% with tools** (table; vs GLM-5.2 40.1/54.7, Fable 53.3/64.5) — earlier checkpoint run slightly below final.
- AIME 2026: **97.1%** (table; vs GLM-5.2 99.2, Gemini 98.3, Fable 99.9)
- Artificial Analysis Intelligence Index (xhigh, v4.3.2): **25** composite (AA 10 evals: Briefcase, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, Omniscience, LCR) — rank #28/114, above open-weight median 18.
- Global-MMLU-Lite: **88.7%** (table; vs Gemini 92.7, Fable 93.3)
- IFBench (instruction following): **79.8%** (table; vs Nemotron 81.4, GLM 73.3, Fable 63.5)
- CritPt / AA-Omniscience: AA Omniscience **2.1** (vs Fable 40, Gemini 33), CritPt not isolated
- LCR / AA-LCR v1.1, MRCR: **no direct MRCR/RULER % found** (AA-LCR composite inside Index)

Coding:

- SWE-bench Verified (bash-only harness, effort 0.99): **77.6%** (thinkingmachines table; vs Kimi K2.6 80.2, GLM-5.2 80.0, GPT Sol 82.2, Fable 95.0)
- SWE-bench Pro Public (refined): **54.3%** (table; vs Kimi K2.6 58.6, GLM 62.1, Fable 80.0)
- DeepSWE / Coding Index: **no verified DeepSWE 1.1 % reported for Inkling** (Inkling table omits DeepSWE; Kimi K2.6 DeepSWE not listed here) — **no verified public score found**
- SciCode: **no verified SciCode % for Inkling** (AA Index includes SciCode but not isolated per-model extraction) — **no verified public score found** as single point
- LiveCodeBench / Vibe Code Bench: **no verified public score found** for Inkling in this snapshot

Long context:

- Window 1M verified, but **no MRCR v2 128K/1M pointwise score found** for Inkling (only GDP.pdf inside Index, no retrieval %)

### Normalized scores (1–100)

- **Tool use: 77/100.** MCP Atlas ~75-76% strong, Terminal 63.8% mid-high (vs frontier 88%+ needed for 90+), but Tau3 23.7% moderate and Toolathlon 45.5% trail frontier 76% — strong general agentic breadth but capped by low banking/toolathlon.
- **Reasoning: 84/100.** GPQA 87.2% near frontier 90%+, AIME 97.1% elite, HLE with tools 46% strong (40%+ = frontier band) but HLE text-only 29.7% below 40% frontier text-only, AA Index 25 above median 18 but below closed Fable/Gemini 40-53 — strong but not top.
- **Context window: 98/100.** 1,048,576 tokens in ≥1M tier (95-100); trajectory 256K limit noted, but window size qualifies high; missing MRCR 98%+ retrieval at 512K+ prevents 100, but 1M breadth earns near top.
- **Multimodal: 78/100.** Text+image+audio+video in (pretrained on all), MMMU Pro 73.5%, CharXiv RQ 78.1/82.0 with python, Audio MC 56.6/MMAU 77.2/VoiceBench 91.4 multimodal breadth; scored 78 in 75-90 video/PDF tier (no audio out), below 90-100 audio-out.
- **Coding: 80/100.** SWE Verified 77.6% and Pro 54.3% solid (Pro near median front), Terminal 63.8% mid, but vs frontier SWE-Verified 80%+ and Pro 60%+ and DeepSWE 66%+ needed for 90 — capped by Pro 54.3 <60 and no DeepSWE elite score.
- **Cost efficiency: 78/100.** $1.00/$4.05 (cached $0.17) — between $0.60/$2.20 ~92 and $1.25/$4.25 ~88 bands? Actually $1.00/$4.05 is ~ $2.5 avg vs $0.60/$2.20 avg $1.4 (~92) and $3/$15 avg $9 (~60) — interpolates ~82; scored 78 given official $1.87/$4.68 higher, plus 50% discount temporary caveat.
- **Overall Score: 83/100.** Mean of five quality dims (77+84+98+78+80)/5=83.4 → 83. Best-fit: balanced 1M open-weight generalist at ~1/3 tokens of peers for same TB — choose when controllable-effort efficiency + 1M multimodal breadth + 77.6% SWEBench matter more than absolute frontier HLE 53%+ or TB 82%+.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (thinkingmachines.ai news/introducing-inkling & model card, huggingface Inkling-NVFP4 eval, Artificial Analysis Inkling xhigh Index, Sebastian Raschka architecture notes, models.dev pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

