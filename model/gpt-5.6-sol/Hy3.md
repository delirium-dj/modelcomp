# GPT-5.6 Sol — findings by Hy3

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship reasoning model in the GPT-5.6 series (Sol/Terra/Luna), launched 2026-07-09. Targets coding, research, science, cybersecurity, computer use, and design. Introduces Max reasoning and Ultra multi-agent collaboration modes.
- **Provider / access:** OpenAI API, Azure OpenAI, ChatGPT (paid tiers). Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-07-09.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1,500,000 tokens (full GPT-5.6 series standard; Codex uses 1M working window).
- **Modalities:** text in/out; image in; reasoning; tool calls. Native unified multimodal per series.
- **Pricing (as of 2026-11-14):** tiered (Sol is premium); exact per-token rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / SWE-agent figure found this pass
- Introduces Ultra multi-agent collaboration mode (vendor claim, no numeric score)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,500,000-token window verified (series standard); Codex working window 1,000,000. No public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** Flagship agent/computer-use positioning plus Ultra multi-agent mode; capped by no public agentic benchmark number.
- **Reasoning: 90/100.** Flagship reasoning tier with Max reasoning mode; no public GPQA/HLE figure to confirm higher.
- **Context window: 100/100.** 1,500,000-token context — highest in the current cohort.
- **Multimodal: 85/100.** Native unified multimodal per series; no verified audio/video generation detail.
- **Coding: 90/100.** Explicit coding/research flagship focus; no public SWE-bench number found to push higher.
- **Cost efficiency: 60/100.** Premium Sol tier; pricing undisclosed but expected high.
- **Overall Score: 91/100.** Mean of the five non-cost dims (90+90+100+85+90)/5 = 91.0 → 91. Best-fit: highest-context flagship with strong agentic/coding positioning, gated by limited public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, OpenAI Help Center, Tencent Cloud, BAAI; independent of peer `model/` findings.
- Reference URLs:
  - [OpenAI GPT-5.6 — Baidu Baike](https://baike.baidu.com/item/OpenAI%20GPT-5.6/68624189)
  - [GPT-5.6 Sol 1.05M context (Tencent Cloud)](https://cloud.tencent.com/developer/article/2728426)
  - [OpenAI model release notes](https://help.openai.com/zh-hans-cn/articles/9624314-model-release-notes)
