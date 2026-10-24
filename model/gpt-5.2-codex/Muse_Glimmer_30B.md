# GPT-5.2 Codex — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-5.2-codex
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI’s GPT-5.2 variant optimized for long-horizon agentic coding in Codex with native context compaction, stronger large-change refactor/migration, improved Windows + vision, and stronger cybersecurity capabilities.
- **Provider / access:** OpenAI. API docs https://developers.openai.com/api/docs/models/gpt-5.2-codex; Codex surfaces for paid ChatGPT users. Currently listed as Shut down in API docs.
- **Release / knowledge:** Released Dec 18 2025; knowledge cutoff Aug 31 2025.
- **IDs:** `gpt-5.2-codex`
- **Context window:** 400,000 total; 272,000 max input; 128,000 max output.
- **Modalities:** Input text, image; output text. Reasoning effort settings low/medium/high/xhigh.
- **Pricing as of 2026-10-24:** Input $1.75 /1M, Cached input $0.175 /1M, Output $14 /1M. No free lane.
- **Architecture:** Proprietary; GPT-5.2 based, not disclosed.

### Raw benchmarks found

**Official OpenAI positioning**
- Blog states state-of-the-art performance on SWE-Bench Pro and Terminal-Bench 2.0; no numeric values published in launch post.
Source: https://openai.com/index/introducing-gpt-5-2-codex/

**Independent aggregators**

*evals.report – 8 reported scores Dec 18 2025*
- SWE-bench Pro – 41.04% % resolved Official
- SWE-bench Multilingual – 66.3% Official
- PostTrainBench – 17.22% weighted average Official
- GDPval – 1288 Elo Official
- SciCode – 54.6% accuracy Unverified
- WebDev Arena – 1335 Elo Verified
- Vibe Code Bench – 37.91% Overall accuracy Verified
- Artificial Analysis Intelligence Index – 49 Index Unverified
Source: https://evals.report/models/openai-gpt-5-2-codex

*byteiota.com analysis Dec 20 2025*
- SWE-Bench Pro 56.4% claimed highest recorded; SWE-bench Verified 80.0% for GPT-5.2 claimed.
Source: https://byteiota.com/gpt-5-2-codex-24-hour-coding-56-swe-bench-explained/

*benchlm.ai last updated Oct 23 2026*
- Overall 55.27/100 rank #67/992
- Vibe Code Bench 37.91%
- LiveCodeBench Vals 88.0%
- SWE-bench Vals 72.4%
- AA-LCR 82.3%, CritPt 8.7%, AA-MMMU-Pro 76.3%, τ²-bench 92.1%
Source: https://benchlm.ai/models/gpt-5-2-codex

**Conflicts / notes**
- SWE-Bench Pro: 41.04% Official evals.report vs 56.4% byteiota vs 72.4% Vals benchlm – different versions/vendors.
- Terminal-Bench: Mentioned as state-of-the-art but no numeric value published.
- Humanity’s Last Exam: No numeric result found in sources checked.
- API status: Docs show Shut down now vs launch description of Codex access.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 92.1% benchlm, Vibe Code Bench 37.91%. SWE-bench Pro variance 41-56% limits confidence.
- **Reasoning: 62/100.** GDPval 1288 Elo, Artificial Analysis Intelligence Index 49. No HLE/GPQA public.
- **Context window: 84/100.** 400K total / 128K output verified.
- **Multimodal: 63/100.** Text+image input → text output; no audio/video.
- **Coding: 82/100.** LiveCodeBench 88.0% Vals, SWE-bench Vals 72.4%, SWE-bench Multilingual 66.3%. Pro variant lower.
- **Cost efficiency: 45/100.** $1.75/$14 per 1M; paid premium coding pricing.
- **Overall Score: 72/100.** Mean of Tool 68, Reasoning 62, Context 84, Multimodal 63, Coding 82. Strong coding specialist with limited independent reasoning verification.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
