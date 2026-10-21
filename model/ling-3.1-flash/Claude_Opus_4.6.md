# Ling 3.1 Flash — findings by Claude Opus 4.6

- Source: InclusionAI (Ant Group) / Ling 3.1 Flash (`opencode/ling-3.1-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's 560B/~25B-active hybrid-reasoning MoE with 262K served context (1M behind post-trial paid tier) for coding and tool-using agents. The cyber-range specialist with standout CyberGym 87.9% and FrontierSWE 75.2%. Free trial available.
- **Provider / access:** Free trial `opencode/ling-3.1-flash-free`. OpenRouter and Vercel gateways. Paid tier unannounced. No permanent Free ID.
- **Release / knowledge:** September–October 2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/ling-3.1-flash` (free trial through 2026-10-13)
- **Context window:** 262,144 (256K) served; 32,768 max output. 1M behind post-trial paid tier. Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-21):** Free during trial ($0/$0). Paid pricing unannounced. API gateways ~$0.30/1M input.
- **Architecture:** 560B total parameters, ~25B active (MoE). 63 KDA layers + 9 gated MLA layers (7:1 ratio). 512 routed experts. Native hybrid-reasoning mode (default on). MIT open-weights.

### Raw benchmarks found

Agent / tool use:

- CyberGym: **87.9%** (Traictory / InclusionAI report)
- Terminal-Bench 4.0: **40.4–46.0%** (BenchmarkList / BenchLM)
- SWE-Atlas (Codebase QnA): **55.9%** (BenchmarkList)
- SkillsBench: **68.7%** (BenchmarkList)
- AutomationBench: **52.5%** (BenchmarkList)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for 3.1 Flash specifically

Coding:

- FrontierSWE: **75.2%** (Traictory / InclusionAI report)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262K served (1M post-trial). No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 62/100.** CyberGym 87.9% is exceptional for security tasks. Terminal-Bench 4.0 at 40.4–46% is moderate but competitive for a Flash-class model. SWE-Atlas 55.9% and SkillsBench 68.7% show broad agentic capability. Capped by Terminal-Bench being the harder version 4.0 and trailing top agentic models.
- **Reasoning: 55/100.** No published GPQA score. Hybrid-reasoning mode (default on) suggests decent capability. At 25B active with 560B total, reasoning should be strong. Capped by zero published reasoning benchmarks.
- **Context window: 78/100.** 262K served per tier mapping (~256K = 78). 1M available in post-trial paid tier.
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 60/100.** FrontierSWE 75.2% is strong for a Flash-class model. CyberGym shows security coding capability. Capped by lack of SWE-bench Verified and LiveCodeBench scores.
- **Cost efficiency: 90/100.** Free trial ($0). MIT open weights. Paid pricing likely competitive (~$0.30/1M). Excellent value.
- **Overall Score: 54/100.** Mean of (62 + 55 + 78 + 15 + 60) / 5 = 54.0 → 54. The strongest Ling model with excellent cybersecurity and agentic benchmarks. Limited by text-only modality. Best for security-focused coding and broad agentic tasks where the hybrid-reasoning mode adds value.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Public internet research cross-referencing MindStudio, Traictory, BenchmarkList, BenchLM, AIML API, and AI-TLDR evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
