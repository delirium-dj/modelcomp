# Gemini 3.6 Flash — findings by Qwen 3.7 Plus

- Source: Google/Gemini-3.6-Flash (`google/gemini-3.6-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's workhorse Flash model for developers, released July 21, 2026. Improves on Gemini 3.5 Flash across coding (DeepSWE 37→49%, SWE-Bench Pro 55.1→58.7%), computer use (OSWorld 78.4→83%), and long-context retrieval (27→54%) while getting faster (~280-304 t/s) and cheaper (output $9→$7.50/1M). Average task time halved from 2.7 to 1.3 minutes. Knowledge cutoff jumped to March 2026 (from Jan 2025). Uses 17% fewer output tokens than predecessor. AA Intelligence Index 34 is low — same intelligence tier as 3.5 Flash, just faster and cheaper. Broad multimodal support (text, image, audio, PDF, voice, video in). Free tier available. GPQA Diamond 92.8% and LiveCodeBench 88.1% are strong. OSWorld 83% is excellent for computer use.
- **Provider / access:** Google AI Studio, Gemini API (`gemini-3.6-flash`), Gemini app, Antigravity, Android Studio, Vertex AI. Free tier available on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff March 2026.
- **IDs:** `google/gemini-3.6-flash` (OpenCode Zen); `gemini-3.6-flash` (Gemini API).
- **Context window:** 1,048,576 tokens (1M) total, 64K output.
- **Modalities:** Text, image, audio, PDF in; text out. Also supports voice and video processing per sources.
- **Pricing (as of 2026-10-10):** $1.50/$7.50 per 1M in/out. Free tier available on Google AI Studio and OpenCode Zen with standard rate limits. ~25% cheaper than Claude Sonnet 5 on both input and output.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83%** (Google; vs. 3.5 Flash 78.4%, +4.6 pts)
- Terminal-Bench 2.1 (Vals): **73.8%** (Vals AI)
- GDPval-AA: **39.3%** normalized / Elo **1423** (AA)
- AA Agentic Index: **30.1%** (AA — low)

Coding:

- DeepSWE: **49.0%** (Google; vs. 3.5 Flash 37%, +12 pts)
- SWE-bench (Vals): **79.6%** (Vals AI)
- LiveCodeBench (Vals): **88.1%** (Vals AI)
- CursorBench 3.2: **53.5%** (Cursor evals)
- AA-SciCode: **53.4%** (AA)
- AA Coding Index: **69.2%** (AA)
- SWE-Bench Pro: **58.7%** (Google; vs. 3.5 Flash 55.1%)

Multimodal:

- OSWorld-Verified: **83%** (Google — computer use)
- AA-MMMU-Pro: **83.2%** (AA)
- Design Arena Website: **1304** (OpenRouter)

Reasoning / knowledge:

- ARC-AGI-1: **91.2%** (ARC Prize)
- ARC-AGI-2: **60.4%** (ARC Prize)
- AA-LCR (Long Context Reasoning): **80.0%** (AA)
- CritPt (Physics): **10.6%** (AA — very low)
- AA Intelligence Index: **34** (AA — low; same as 3.5 Flash per comparison article which says 50 on older version)
- GPQA Diamond: **92.8%** (AA) / **93.4%** (Vals AI)
- MMLU-Pro: **89.3%** (Vals AI)
- AA-HLE: **40.8%** (AA)
- AA-Omniscience Index: **22.1%** (AA — low)
- AA-Omniscience Accuracy: **50.0%** (AA)
- AA-Omniscience Hallucination Rate: **55.6%** (AA)
- Long-context retrieval: **54.0%** (Google; vs. 3.5 Flash ~27%, +27 pts)

### Normalized scores (1–100)

- **Tool use: 57/100.** OSWorld 83% is excellent for computer use (up from 3.5 Flash's 78.4%). Terminal-Bench 2.1 73.8% is competitive. However, AA Agentic Index 30.1% is low — the lowest agentic index score among Flash models in this dataset. GDPval-AA Elo 1423 is moderate. The tool use profile is anchored by strong computer use (OSWorld) and terminal capability (Terminal-Bench), but the AA Agentic Index at 30.1% indicates weak performance across the broader agentic benchmark battery.
- **Reasoning: 58/100.** ARC-AGI-1 91.2% is strong. AA-LCR 80.0% is solid for long-context reasoning. GPQA Diamond 92.8-93.4% is excellent. MMLU-Pro 89.3% is strong. However, ARC-AGI-2 60.4% is only moderate (significantly below GPT-6.1 Sol's 94.2%). AA Intelligence Index 34 is low. AA-HLE 40.8% is modest. CritPt 10.6% is very low. AA-Omniscience 22.1% is low. The reasoning profile is split: strong on knowledge benchmarks (GPQA, MMLU-Pro) and long-context reasoning, but weak on composite intelligence measures and physics reasoning.
- **Context window: 82/100.** 1M tokens total with 64K output. AA-LCR 80.0% is solid for long-context reasoning. Long-context retrieval improved dramatically from ~27% to 54.0% (+27 pts). The 1M context window is standard for frontier models. The 64K output cap is moderate (vs. 128K for GPT-6 family). The combination of 1M context and strong retrieval makes this suitable for long-document processing.
- **Multimodal: 83/100.** OSWorld 83% is excellent for computer use. AA-MMMU-Pro 83.2% is strong. Broadest input modality support in the Flash tier: text, image, audio, PDF, voice, and video. For multimodal applications requiring multiple input types, this is the most capable option at this price point. Claude Sonnet 5 doesn't support voice or video.
- **Coding: 67/100.** LiveCodeBench 88.1% is excellent. SWE-bench 79.6% is strong. AA Coding Index 69.2% is solid. DeepSWE 49.0% is moderate (up from 3.5 Flash's 37%, but still behind frontier models at 63-75%). CursorBench 53.5% is moderate. AA-SciCode 53.4% is modest. SWE-Bench Pro 58.7% is moderate. The coding profile is split: excellent on LiveCodeBench and SWE-bench (Vals), but moderate on DeepSWE and CursorBench. The +12 pt DeepSWE improvement over 3.5 Flash is significant but from a lower base.
- **Cost efficiency: 88/100.** $1.50/$7.50 per 1M — ~25% cheaper than Claude Sonnet 5 on both input and output. Free tier available. Speed is impressive at 280-304 t/s (1.7x faster than Claude Sonnet 5 at ~180 t/s). Average task time halved to 1.3 minutes. 17% fewer output tokens than predecessor. At scale (100K tasks/month), savings of ~$2,750/month vs. Claude Sonnet 5. For cost-sensitive teams building high-volume agentic pipelines, this is among the most efficient options.
- **Overall Score: 69/100.** Mean of five quality dims: (57 + 58 + 82 + 83 + 67) / 5 = 69.4. Google's workhorse Flash model. Key strengths: OSWorld 83% (excellent computer use), LiveCodeBench 88.1% (excellent), SWE-bench 79.6% (strong), GPQA Diamond 92.8% (excellent), 1M context window, broad multimodal support (text/image/audio/PDF/voice/video), fast (280-304 t/s), cheap ($1.50/$7.50), free tier, knowledge cutoff March 2026. Key weaknesses: AA Intelligence Index 34 (low), AA Agentic Index 30.1% (low), DeepSWE 49.0% (moderate for Flash tier), ARC-AGI-2 60.4% (moderate), CritPt 10.6% (very low), AA-Omniscience 22.1% (low), same intelligence tier as 3.5 Flash (just faster/cheaper). Best fit for: cost-sensitive high-volume agentic pipelines, multimodal applications requiring broad input support, teams in the Google ecosystem (AI Studio, Vertex, Antigravity), and existing 3.5 Flash users (pure upgrade: same intelligence, faster, cheaper, fresher knowledge). Not ideal for: tasks requiring highest composite intelligence (AA Index 34), frontier-difficulty coding (DeepSWE 49%), or complex physics reasoning (CritPt 10.6%).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google official blog, DeepMind model card, BenchLM, Artificial Analysis, Vals AI, Cursor evals, ARC Prize, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
