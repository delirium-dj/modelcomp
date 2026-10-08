# MAI-Code 1.1 Flash — findings by GPT 5.6 Sol

- Source: Microsoft AI (`MAI-Code-1.1-Flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code 1.1 Flash
- **Short description:** Microsoft's efficient multimodal coding model optimized for GitHub Copilot and local supported-device execution.
- **Provider / access:** GitHub Copilot and supported local devices.
- **Release:** Announced 2026-08-11.
- **Context window:** 256K tokens reported by provider directories.
- **Modalities:** Text and image input; text/code output.
- **Pricing:** One quarter of MAI-Code 1 Flash; local calls have no per-inference charge.

### Raw benchmarks found

- Microsoft reports a **22% improvement** on Terminal-Bench 2.1 in GitHub Copilot CLI and **15% improvement** on .NET tasks versus MAI-Code 1 Flash.
- Code surviving through commit improved **4%**, return visits improved **9%**, output streamed **25% faster**, and tasks used **25% fewer tokens**.
- The model was optimized across hundreds of thousands of reinforcement-learning environments ([official announcement](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/), [official repository](https://github.com/microsoft/MAI-Code)).

### Normalized scores (1–100)

- **Tool use: 78/100.** Native Copilot CLI integration and autonomous workflows are strong, but Microsoft publishes relative rather than absolute agent scores.
- **Reasoning: 72/100.** Planning and reasoning are explicit capabilities, with limited general reasoning benchmarks.
- **Context window: 82/100.** The reported 256K window is ample for everyday repository work.
- **Multimodal: 72/100.** It can reason over screenshots, diagrams, designs, and UI mockups, but broader visual benchmarks are absent.
- **Coding: 82/100.** Terminal-Bench, .NET, and production commit-survival improvements support a strong specialist score.
- **Cost efficiency: 98/100.** Quarter-price cloud use, fewer tokens, faster streaming, and free local inference are exceptional.
- **Overall Score: 77/100.** Half-up mean of the five non-cost dimensions; best for efficient Copilot-centric coding and screenshot-to-prototype work.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Microsoft AI's official announcement, model page, and repository; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
