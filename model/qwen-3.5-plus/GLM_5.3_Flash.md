# Qwen 3.5 Plus — findings by GLM 5.3 Flash

- Source: Alibaba (`Qwen/Qwen3.5-Plus`, snapshot `Qwen3.5 Plus 2026-02-15`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** The Plus-tier Qwen3.5 API model from Alibaba — a 397B-parameter hybrid Gated DeltaNet + MoE (17B active) tuned for knowledge-heavy and finance tasks. Built on the Qwen3.5 open generation; flag: distinct API tier from the open-weight size releases, and from Qwen 3.6 Plus (its successor) and Qwen3.5 Omni (audio/video variant).
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-plus` (paid); Alibaba default provider at $0.40/$2.40 per Vals AI; OpenAI-compatible endpoints (Qubrid `Qwen/Qwen3.5-Plus`). Chat Completions API.
- **Release / knowledge:** Qwen3.5 generation first open release 2026-02-16 (Vals AI lists Qwen 3.5 Plus release Feb 16, 2026); knowledge cutoff: no verified public data found.
- **IDs:** `opencode/qwen-3.5-plus` (Zen, paid); `Qwen/Qwen3.5-Plus` (Alibaba/Qubrid); `Qwen/Qwen3.5-397B-A17B` (open-weight base id)
- **Context window:** 991K–1M tokens total; max output 65,536 — verified via Vals AI hyperparameter table (991K context, 65,536 max output); Qubrid testing confirms the 1M window "worked well in practice for large codebases and long documents".
- **Modalities:** text, image, video in; file/PDF input not supported (Vals AI modality list); text out; reasoning always on (thinking config); tool calls yes. Qubrid additionally claims audio input ("full" multimodal) — weaker source, unverified elsewhere. A "Qwen3.5 Omni Plus" alias (`qwen3.5-omni-plus`) is tracked separately, unverified.
- **Pricing (as of 2026-10-02):** Paid — OpenCode Zen $0.20 / $1.20 per 1M (cache read $0.02); Alibaba default-provider cost $0.40 / $2.40 per 1M (Vals AI). No Free ID on Zen found.
- **Architecture:** Hybrid Gated DeltaNet + sparse MoE, 397B total / 17B active (Qubrid technical comparison); the Qwen3.5 open family is Apache-2.0; Vals marks the Plus API tier weights "Private".

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **41.57% ±5.25** (Vals AI, thinking config, rank 31/67; #11 in Vals Index mix — "keeps it competitive on agentic coding tasks")
- Terminal-Bench 2.1: no verified public score found
- Finance Agent v1.1: **#8 overall and #1 among open-weight models** (Vals AI takeaways; #8 also in the Vals Index Finance Agent subset, #6 on Corp Fin (v2))
- MortgageTax: **60.77% ±0.97** (Vals AI, rank 65/98; #30 on the Vals takeaways summary)
- SAGE: **30.40% ±3.15** (Vals AI, rank 79/90; #30 on the takeaways summary)
- Claw-Eval / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.37% ±1.67** (Vals AI, rank 38/138 — #6 overall, first among open-weight models)
- MMLU Pro: **87.18% ±0.33** (Vals AI, rank 34/138 — #9 overall, first among open-weight models)
- MedQA: **#11** (Vals AI takeaways)
- LegalBench: **85.10% ±0.41** (Vals AI, rank 24/149)
- Vals Index: **#10 overall (57.1% accuracy), #3 among open-weight models** (Vals AI)
- HLE / LCR / CritPt: no verified public score found

Coding:

- SWE-bench: **71.20% ±2.03** (Vals AI, rank 59/88; #17 on the SWE-bench Verified subset in the Vals Index mix)
- SWE-bench Verified: **76.4** (Qubrid AI independent test — "roughly level with Gemini 3 Pro")
- LiveCodeBench: **85.33% ±1.00** (Vals AI, rank 34/143)
- Vibe Code Bench v1.1: **15.74% ±3.18** (Vals AI, rank 80/106)
- SciCode: no verified public score found

Long context:

- 1M window confirmed usable for large codebases/long documents in practice (Qubrid test); no MRCR/RULER retrieval numbers found

Behavioral (production-relevant caveats):

- Overthinking: Qubrid head-to-head measured **91% of tokens on internal reasoning vs 9% output** (1,858 reasoning tokens → 178 output words); consistency 9.0/10 with 2 flaky test failures; 106.27 tok/s generation
- Vals AI notes a highly sensitive content filter and strict output-format issues, driving low CaseLaw (v2) (#25) and MMMU Pro scores

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 41.57% (Vals, rank 31/67) sits below the mid band ref, partially offset by Finance Agent v1.1 #1-among-open-weights; the strict output-format issues documented by Vals cap agentic reliability.
- **Reasoning: 85/100.** GPQA Diamond 87.37% (#6, best open-weight), MMLU Pro 87.18% (#9) and Vals Index #10 (57.1%) land just under the GPQA 90%+ frontier ref — top knowledge performance, capped by the missing HLE/LCR rows.
- **Context window: 95/100.** ~1M-token context window (Vals: 991K; advertised 1M) lands in the ≥1M tier; no measured ≥98% retrieval at 512K+ to justify 100. Max output 65,536 is adequate, not a caveat.
- **Multimodal: 65/100.** Image and video input supported (Vals), but MMMU Pro 22.77% (rank 93/93 — last place) shows weak vision quality and file input is unsupported; the +video-in coverage band (75–90) is pulled down by the measured vision underperformance.
- **Coding: 75/100.** SWE-bench Verified 76.4 (Qubrid) / 71.2% (Vals) and LiveCodeBench 85.33% are mid-band, Vibe Code v1.1 15.74% is weak — the "LiveCode 80%+, Vibe low" profile maps to the 65–75 band top.
- **Cost efficiency: 92/100.** OpenCode Zen paid pricing $0.20/$1.20 per 1M maps to ~94 on the inverse-pricing rubric, adjusted down for the overthinking profile (91% of tokens spent on reasoning in Qubrid's test inflates effective output cost).
- **Overall Score: 74/100.** Mean of the five quality dims (50+85+95+65+75)/5 = 74.0 → 74. Best fit: knowledge- and finance-heavy workloads at near-open-weight-frontier reasoning; not the pick for vision-heavy or strict-format agent pipelines (use Qwen 3.6 Plus for decisive agentic behavior).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-02
- Method: public internet research (Vals AI model page, Qubrid AI technical comparison, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
