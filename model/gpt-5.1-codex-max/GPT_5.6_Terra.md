# GPT-5.1 Codex Max — findings by GPT-5.6 Terra

- Source: OpenAI / GPT-5.1-Codex-Max
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

GPT-5.1-Codex-Max is OpenAI’s coding-specialized GPT-5.1 variant for long-running agentic tasks.  The official API page now marks it shut down, but documents a 400K context window, 128K maximum output, image input and text output, reasoning-token support, and Responses API-only access.  OpenAI’s release page says the model was natively trained for multi-context-window compaction, permitting coherent work across millions of tokens within a task.

## Evidence review

### Official evidence

OpenAI characterizes the model as purpose-built for agentic coding, trained on PR creation, code review, frontend work, and code Q&A.  The release reports better SWE-bench Verified performance than GPT-5.1-Codex at matched medium reasoning effort while using 30% fewer thinking tokens, but does not publish the exact plotted value in accessible page text.  Image input is supported, while audio and video are not, so it is not a general multimodal system.

### Independent checks and reconciliation

METR evaluated the exact model on a 90-task subset of HCAST and RE-Bench, reporting that its time-horizon result and manually scored work suggested a mild improvement beyond GPT-5; this is independent but deliberately not a direct accuracy percentage.  The SWE-bench leaderboard records an independent 57.2% run dated 2025-12-12.  That is substantially lower than the widely reported vendor-style SWE-bench figure because harness, agent, and evaluation setup differ; it should not be averaged with it.  Together, the sources support strong coding and long-horizon agency, while providing little basis for a top general-reasoning or broad-multimodal score.

### Raw benchmarks found

| Area | Result | Evidence |
| --- | ---: | --- |
| Coding | 57.2% SWE-bench | Independent leaderboard run, 2025-12-12 |
| Long-horizon work | HCAST (90-task subset) and RE-Bench evaluation; qualitative result: mild improvement beyond GPT-5 | METR independent evaluation |
| Vendor comparative claim | Better matched-effort SWE-bench Verified result than GPT-5.1-Codex, using 30% fewer thinking tokens | OpenAI release page; no exact accessible value |
| Context | 400K context, 128K max output; compaction across multiple windows | OpenAI API and release pages |

### Normalized scores (1–100)

- **Tool use: 89/100.** Responses API-only deployment and coding-agent specialization support a high agent score; public exact-model tool-call task metrics remain limited.
- **Reasoning: 86/100.** Reasoning-token support, METR’s HCAST/RE-Bench work, and the model’s long-horizon design indicate strong reasoning, capped by scarce broad independent accuracy data.
- **Context window: 96/100.** The official 400K window, 128K output, and native multi-window compaction are exceptional for project-scale work.
- **Multimodal: 56/100.** It accepts images but outputs text and does not support audio or video; the product is explicitly coding-focused.
- **Coding: 94/100.** The product focus, official matched-effort SWE improvement, and independent SWE-bench result support an excellent coding score, tempered by harness-sensitive results.
- **Cost efficiency: 63/100.** Official price was $1.25/M input, $0.125/M cached input, and $10/M output; capability is strong but it was a paid, now-shut-down model.
- **Overall Score: 84/100.** Mean = 84.2 from Tool use, Reasoning, Context window, Multimodal, and Coding; best suited to long-running code-agent work rather than broad multimodal use.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Fresh public-web research, including official OpenAI documentation and independent evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.1-codex-max
  - https://openai.com/index/gpt-5-1-codex-max/
  - https://metr.org/evaluations/gpt-5-1-codex-max-report/
  - https://www.trustthebench.com/benchmarks/swe-bench
