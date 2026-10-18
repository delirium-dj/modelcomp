# GPT-5.1 Codex — findings by Big Pickle

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's November 2025 agentic coding variant, positioned between Codex Mini and GPT-5.1-Codex-Max. Tuned for repo-scale software engineering: PR creation, code review, frontend work, and terminal-based agent loops. Superseded by GPT-5.1-Codex-Max (2026-01), GPT-5.2-Codex, and GPT-5.3 Codex; still available via the Responses API. Not an alias of any other entry.
- **Provider / access:** OpenAI Responses API only (`gpt-5.1-codex`); also available through Codex CLI, IDE extension, and cloud. Not on Azure Foundry or Bedrock. No free tier (`meta.json` `noFreeId: true`).
- **Release / knowledge:** released 2025-11-13 (Vals AI, Franklin AI, llm-stats.com — three independent sources agree). Knowledge cutoff not publicly stated by OpenAI for this variant; the base GPT-5.1 shipped the same day.
- **IDs:** `gpt-5.1-codex` (OpenAI API).
- **Context window:** 400,000 tokens total / 128,000 max output (repo `meta.json`; Vals AI and BenchLM independently confirm 400K/128K). No compaction support — that arrived with GPT-5.1-Codex-Max.
- **Modalities:** text, image in; text out (repo `meta.json`; Vals AI confirms text + image input, no video). File input supported (Vals AI). Tool calls; structured output; reasoning effort levels (low / medium / high — Franklin AI benchmarks use "high").
- **Pricing (as of 2026-10-18):** $1.25 in / $10.00 out per 1M tokens; cached input $0.125 (repo `meta.json`; Vals AI, BenchLM, and llm-stats.com all confirm $1.25/$10.00). Blended cost ~$3.44/1M (Franklin AI). Paid only.
- **Architecture:** proprietary (OpenAI, weights private). Believed to be a post-trained checkpoint of the GPT-5.1 base model specialized for coding/agentic workloads; OpenAI has not published parameter count or architecture details.

### Raw benchmarks found

> Vendor-reported figures come from OpenAI's GPT-5.1-Codex-Max launch page (which includes GPT-5.1-Codex as the baseline column) and the Verdents/LangDocs reproduction. Independent numbers (Vals AI, Franklin AI, BenchLM, llm-stats.com, Artificial Analysis) are marked as such. This model has thin independent coverage — BenchLM lists only 4 sourced benchmarks.

Agent / tool use:

- τ²-bench (TAU2): **83.0%** (Franklin AI, high effort)
- Terminal-Bench 2.0: **52.8%** (OpenAI launch chart, high effort; via Verdents and llm-stats.com)
- Terminal-Bench Hard: **34.8%** (Franklin AI)
- Terminal-Bench 2.1: **no verified public score found** for this model (BenchLM shows "Coming soon" across all comparison pages)
- Gert Labs: **49.68%** (BenchLM sourced)
- JobBench: **26.2%** (BenchLM sourced)
- OSWorld / OSWorld-Verified: **no verified public score found**

Reasoning / knowledge:

- GPQA (Diamond): **86.0%** (Franklin AI)
- AIME 2025: **95.7%** (Franklin AI)
- MMLU Pro: **86.0%** (Franklin AI)
- Humanity's Last Exam: **25.7%** (Franklin AI, high effort)
- Long Context Reasoning (LCR): **69.3%** (Franklin AI)
- IFBench (instruction following): **70.0%** (Franklin AI)
- Franklin AI Intelligence Index: **23.7**
- LLM Stats Score: **29.5** (#127 overall; Reasoning 29.7, Coding 21.0, Agents 10.5) — llm-stats.com
- Artificial Analysis Intelligence Index: **25** (estimated, for GPT-5.1 base "High" — AA does not list a separate GPT-5.1-Codex entry; the Codex variant's index is not independently published)
- BenchLM independent public score: **50.37 / 100** (only 4 sourced benchmarks — coverage is thin, treat as directional)
- AA-LCR v1.1 (GPT-5.1 base): **80%**; GDPval-AA v2.1 (GPT-5.1 base): **826**; CritPt (GPT-5.1 base): **5%** — Artificial Analysis, base model not Codex variant

Coding:

- SWE-bench Verified: **73.7%** (OpenAI, high effort; confirmed by Verdents, llm-stats.com)
- SWE-Lancer IC SWE: **66.3%** (OpenAI, high effort)
- LiveCodeBench: **84.9%** (Franklin AI) / **85.55% ±1.00**, rank 31/143 (Vals AI, high effort) — two independent sources agree within ~0.7pp
- Vibe Code Bench v1.1: **13.12% ±3.16**, rank 91/112 (Vals AI) — notably weak; this benchmark tests building web apps from scratch
- SWE-bench Pro: **no verified public score found** for this model
- SWE-bench Multilingual: **no verified public score found**
- SciCode: **no verified public score found**
- DeepSWE: **no verified public score found**

Multimodal:

- MMMU / MMMU-Pro: **no verified public score found** for GPT-5.1 Codex specifically. The base GPT-5.1 scores MMMU 85.4% (llm-stats.com), but the Codex variant's multimodal performance is not separately published. BenchLM multimodal public-lane: **71.3** (unranked, 1 row — likely a single sourced benchmark, insufficient for a firm score).
- Image input is supported (meta.json, Vals AI); no audio or video input.

Long context:

- AA-LCR (GPT-5.1 base): **80%** (Artificial Analysis). No long-context benchmark found specifically for the Codex variant.

### Scores

- **Tool use: 62/100.** τ²-bench 83.0% is solid; Terminal-Bench 2.0 52.8% is mid-pack for a Nov 2025 frontier-adjacent model; Gert Labs 49.68% is competitive. Offsets: JobBench 26.2% is weak; Terminal-Bench Hard 34.8% is low; no TB2.1 or OSWorld score exists to verify current agentic standing. The model has been superseded three times in the Codex line, and independent agentic coverage is thin.
- **Reasoning: 72/100.** GPQA 86.0% and AIME 2025 95.7% are strong; MMLU Pro 86.0% is solid; IFBench 70.0% and LCR 69.3% are decent. Offsets: HLE 25.7% is well below current frontier (Fable 5.1: 83.17 BenchLM overall; GLM-5.3 HLE w/tools 62.5); AA Intelligence Index 23.7–25 is mid-range; llm-stats Reasoning 29.7 (#119) reflects the model's age relative to the current frontier.
- **Context window: 65/100.** 400K/128K was solid in November 2025 and remains above the 200K tier. Offsets: by October 2026, 1M+ context is standard among frontier models (Opus 4.7, Gemini 3.x, GPT-5.x, GLM-5.3 all at 1M); no compaction support (that arrived with Codex-Max); no long-context benchmark score specific to this variant.
- **Multimodal: 68/100.** Image input is supported and BenchLM's multimodal lane (71.3, 1 row) suggests competent visual reasoning, but no specific MMMU or MMMU-Pro score is published for this variant. The base GPT-5.1's MMMU 85.4% suggests the capability exists; without variant-specific verification, the score is capped. No audio or video.
- **Coding: 75/100.** LiveCodeBench 85.55% (rank 31/143, Vals AI) is genuinely strong; SWE-bench Verified 73.7% and SWE-Lancer 66.3% are solid for a Nov 2025 release. Offsets: Vibe Code Bench 13.12% (rank 91/112) is notably weak — the model struggles with from-scratch web app construction; SWE-bench Pro, Multilingual, and SciCode scores are all absent. BenchLM coding lane 33.6 (#83/150, estimated) reflects the thin coverage and weak Vibe Code Bench more than a coding ceiling. By October 2026, GPT-5.3 Codex (SWE-V 85%, TB2.0 77.3%) has moved well ahead.
- **Cost efficiency: 72/100.** $1.25 input is cheap; $10.00 output is moderate; cached input $0.125 (90% discount) is generous; blended ~$3.44/1M is reasonable for a coding agent. Offsets: output pricing is 3x GLM-5's $3.20 and 2.5x Nemotron-3.5-super-vl's $0.50; Responses API only (no Bedrock/Vertex); no free tier.
- **Overall Score: 68/100.** Half-up mean of Tool use (62), Reasoning (72), Context window (65), Multimodal (68), Coding (75) = 342/5 = 68.4 → 68. Cost efficiency (72) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **Thin independent coverage:** BenchLM lists only 4 sourced benchmarks for GPT-5.1-Codex (independent public score 50.37). Franklin AI has 9 rows. Vals AI has 2. This is significantly less coverage than frontier models (Opus 4.7, Fable 5.1, GLM-5.3 all have 20+). Scores above are directional, not precise.
- **AA Intelligence Index ambiguity:** Artificial Analysis does not list a separate GPT-5.1-Codex entry. The Index of 25 is for the GPT-5.1 base model ("High" effort). The Codex variant's independent intelligence index is not published.
- **Terminal-Bench 2.1:** no score exists for this model. BenchLM shows "Coming soon" across all comparison pages. Do not attribute TB2.1 scores from GPT-5.1-Codex-Max, GPT-5.2-Codex, or GPT-5.3 Codex to this entry.
- **Knowledge cutoff:** not publicly stated by OpenAI for this variant. The base GPT-5.1 shipped the same day (2025-11-13); its cutoff is likely similar but unverified.
- **Vibe Code Bench discrepancy:** Vals AI's 13.12% is notably low compared to the model's strong LiveCodeBench. Vibe Code Bench tests building full web apps from scratch (UI + backend + polish), which is a different skill from competitive programming. Both numbers are real; they measure different things.
- **Supersession:** GPT-5.1-Codex-Max (2026-01) improved SWE-V to 77.9%, TB2.0 to 58.1%, added compaction and Windows support, and cut token use by 30%. GPT-5.2-Codex ($1.75/$14.00) and GPT-5.3 Codex (SWE-V 85%, TB2.0 77.3%) followed. GPT-5.1-Codex is a generation behind the current Codex line.
- **OpenAI launch chart:** the vendor comparison table (GPT-5.1-Codex high vs GPT-5.1-Codex-Max xhigh) is the primary source for SWE-V 73.7%, SWE-Lancer 66.3%, and TB2.0 52.8%. The Max column used compaction + xhigh effort; the Codex column used high effort without compaction. Effort levels differ, so the comparison is not perfectly apples-to-apples.

### Sources

- OpenAI GPT-5.1-Codex-Max launch page (includes GPT-5.1-Codex baseline): https://openai.com/index/gpt-5-1-codex-max
- Vals AI model page: https://www.vals.ai/models/openai_gpt-5.1-codex
- Franklin AI benchmark page: https://franklineh.com/ai-benchmark/gpt-5-1-codex
- BenchLM (multiple comparison pages): https://benchlm.ai/compare/claude-fable-5-1-vs-gpt-5-1-codex, https://benchlm.ai/compare/gpt-5-1-codex-vs-step-5-preview
- llm-stats.com comparison: https://llm-stats.com/models/compare/gpt-5-2025-08-07-vs-gpt-5.1-codex
- Verdents guide: https://www.verdent.ai/guides/model/gpt-5-1-codex
- Artificial Analysis (GPT-5.1 base, not Codex variant): https://artificialanalysis.ai/models/comparisons/gpt-5-1-vs-ernie-4-5-300b-a47b

**Big Pickle (opencode/big-pickle)** — 2026-10-18
