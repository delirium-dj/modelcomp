# GPT-5.6 Sol — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** The largest, highest-tier model of OpenAI's GPT-5.6 family (Sol > Terra > Luna), pitched as "frontier intelligence that scales with your ambition." A strong all-rounder that leads its comparison set on GPQA Diamond (94.1%), MMMU-Pro (83.0), DeepSWE (73.0) and Terminal-Bench 2.1 (88.8), while trailing Claude Fable 5 on the hardest reasoning/deep-repo work and Kimi K3 on agentic endurance.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), platform.openai.com; the flagship GPT-5.6 tier.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff **February 2026**.
- **IDs:** `openai/gpt-5.6-sol`.
- **Context window:** ~1,100,000 tokens input / 128,000 tokens output (llm-stats). Prompts with >272K input tokens are billed at 2x input / 1.5x output (surcharge tier, per developers.openai.com).
- **Modalities:** text + image in → text out; reasoning yes (effort-tunable); tool calls yes (browsing, automation, function tools). No native audio/video input reported (unlike GPT-5.5's omnimodal architecture).
- **Pricing (as of 2026-10-21):** $5.00 / 1M input, $0.50 / 1M cached input, $30.00 / 1M output. OpenAI cut API+credit pricing >20% for 3 months from 2026-08-21; promotional pricing runs at least through 2026-11-21. Family: Terra $2.50/$15, Luna $1/$6.
- **Architecture:** proprietary (closed weights); p95 TTFT 5.85s, ~21 chars/s sustained output floor.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (autonomous web research): **90.4** (#2 in the Kimi-K3 comparison field — behind Kimi K3 91.2, ahead of Fable 5 88.0, Opus 4.8 84.3)
- Automation Bench: **29.7** (behind Kimi K3 30.8; ahead of Fable 5 29.1, Opus 4.8 27.2, GLM-5.2 12.9)
- GDPval-AA v2 (Elo): **1,748** (#2 — behind Fable 5 1,760; ahead of Kimi K3 1,668, Opus 4.8 1,600); AA-Briefcase (Elo): **1,495**
- SpreadsheetBench 2: **32.4**; JobBench: **46.5**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (leads the field — Kimi K3 93.5%, Fable 5 92.6%, GLM-5.2 91.2%, Opus 4.8 91.0%)
- HLE-Full: **44.5** (a relative weak point — behind Fable 5 53.3 and Opus 4.8 49.8; just ahead of Kimi K3 43.5)

Coding:

- DeepSWE (deep-repo autonomous SWE): **73.0** (leads the field — Fable 5 70.0, Kimi K3 67.5, GPT-5.5 67.0, Opus 4.8 59.0)
- Terminal-Bench 2.1: **88.8** (leads — Kimi K3 88.3, Fable 5 / Opus 4.8 84.6, GPT-5.5 83.4)
- Program Bench: **77.6** (#2 behind Kimi K3 77.8, ahead of Fable 5 76.8); SWE Marathon: **39.0** (behind Kimi K3 42.0, Opus 4.8 40.0)
- FrontierSWE: **71.3** (behind Fable 5 86.6 and Kimi K3 81.2; ahead of Opus 4.8 66.7, GPT-5.5 64.9); Frontend Code Arena (Elo): **1,618** (#3 behind Kimi K3 1,679, Fable 5 1,631)
- No SWE-bench Verified figure published in accessible sources

Multimodal:

- MMMU-Pro: **83.0** (leads the field — Kimi K3 81.6, Fable 5 81.2, Opus 4.8 78.9)
- OmniDocBench (document understanding): **85.8** (behind Kimi K3 91.1, Fable 5 89.8, Opus 4.8 87.9)

Long context:

- ~1.1M-token input window with a 128K output cap and a >272K surcharge tier; no MRCR / needle-in-a-haystack retrieval score published in accessible sources.

> Provenance: benchmark figures from the Wan 2.7 Kimi-K3 cross-vendor comparison table (July 2026; GPT-5.6 Sol column, drawing on OpenAI/BenchLM/Artificial Analysis), with specs, pricing, release date and Feb-2026 knowledge cutoff confirmed via llm-stats.com and developers.openai.com. All benchmark values vendor/third-party-reported; OpenAI's own launch page was not directly fetched.

### Normalized scores (1–100)

- **Tool use: 90/100.** Consistently top-2/3 across the agentic board — BrowseComp 90.4, Automation Bench 29.7, GDPval-AA 1,748 — with strong browsing/automation tooling; capped because it is rarely #1 (Kimi K3 leads browsing/automation, Fable 5 leads GDPval) and JobBench 46.5 lags.
- **Reasoning: 89/100.** Best-in-field GPQA Diamond 94.1% (graduate science) with a Feb-2026 cutoff; held below 90 by HLE-Full 44.5, which trails Fable 5 (53.3) and Opus 4.8 (49.8) by meaningful margins on the hardest cross-domain reasoning.
- **Context window: 93/100.** A ~1.1M-token input window with a generous 128K output cap — among the largest input+output combinations tracked; discounted for the >272K surcharge tier and the absence of a published long-context retrieval benchmark.
- **Multimodal: 87/100.** Leads its set on MMMU-Pro 83.0 with solid document understanding (OmniDocBench 85.8); capped because it accepts only text+image (no native audio/video, unlike GPT-5.5/Gemini) and OmniDocBench trails Kimi K3 / Fable 5.
- **Coding: 90/100.** Leads the field on DeepSWE 73.0 (deep-repo SWE) and Terminal-Bench 2.1 88.8, with Program Bench 77.6 near the top; capped by FrontierSWE 71.3 and SWE Marathon 39.0 trailing Fable 5 / Kimi K3 on endurance, and no published SWE-bench Verified.
- **Cost efficiency: 68/100.** $5/$30 with $0.50 cached input is standard flagship pricing (far below GPT-6 Astra's $10/$50, and the Aug-2026 >20% promo helps), but it is 2x Kimi K3's output rate and 2.5x Gemini 3 Pro's, with a >272K surcharge — and cheaper GPT-5.6 Terra/Luna siblings sit right below it.
- **Overall Score: 90/100.** Mean of Tool 90 + Reasoning 89 + Context 93 + Multimodal 87 + Coding 90 = 89.8 → 90. Best fit: balanced frontier workloads — graduate-level scientific reasoning, deep-repo autonomous coding, large multimodal document sets and long agentic browsing — where a strong generalist with a 1.1M window and 128K output is worth flagship pricing; the hardest pure reasoning (HLE) still favors Fable 5 and agentic endurance favors Kimi K3.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Wan 2.7's Kimi-K3 cross-vendor benchmark table for the GPT-5.6 Sol column; specs/pricing/release/cutoff via llm-stats.com and developers.openai.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
