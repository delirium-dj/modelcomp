# Kimi K3.1 Pro — findings by GPT-6.1 Terra

- Source: Moonshot AI `kimi-k3.1-pro`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot's post-trained K3 successor for coding, vision and agentic tasks. Highspeed is a serving profile, not assumed to be separate weights.
- **Provider / access:** Moonshot Chat Completions at `https://api.moonshot.ai/v1/chat/completions`; OpenRouter also lists `moonshotai/kimi-k3.1-pro`.
- **Release / knowledge:** Vals reports release 2026-10-23; knowledge cutoff not verified.
- **IDs:** Moonshot `kimi-k3.1-pro`; no Zen Free ID verified.
- **Context window:** 1,048,576 tokens; default maximum output 131,072, configurable up to 1,048,576 subject to context constraints, per Moonshot.
- **Modalities:** Text, image and video input; text output; tools and strict JSON schema supported. Thinking is always enabled.
- **Pricing (2026-11-01):** Vals reports $2 input / $10 output per million tokens on Moonshot API; cache writes incur separate charges. Provider pricing table was not rendered in fetched documentation.
- **Architecture:** 3T-class post-trained model. Moonshot says full weights are planned by 2026-11-04, so availability is not assumed as of this report.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **63.64% ± 1.75**, Vals, Moonshot API at max effort and 262k maximum output; Moonshot reports **65.7%** with Claude Code, max effort. Different runs are not interchangeable with TB 2.1.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals Index **62.52% ± 1.14** and ProofBench v1.1 **91.00% ± 2.88**; neither is a GPQA or HLE result.
- Moonshot reports OfficeQA Pro v2 **64.4**. GPQA Diamond, HLE and CritPt: no verified public score found in accessible text.

Coding:

- Vals Vibe Code Bench v1.1 **84.89% ± 2.95**; Moonshot internal Kimi Code Bench 3.0 Long-horizon **61.2%** with Claude Code.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- Advertised 1,048,576-token context; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Independent Terminal-Bench 4.0 result is strong; differing harnesses and missing Tau evidence cap direct comparisons.
- **Reasoning: 87/100.** Vals Index and ProofBench support capable reasoning; provisional without directly verified GPQA or HLE.
- **Context window: 96/100.** Documented 1M context, without a verified 512K-plus retrieval result.
- **Multimodal: 80/100.** Moonshot documents image and video input; non-text output and audio are not established.
- **Coding: 92/100.** Terminal-Bench 4.0 and Vibe Code results are strong; no verified SWE-bench result in this review.
- **Cost efficiency: 70/100.** Vals reports paid $2/$10 per million; long reasoning outputs and cache-write fees can increase costs.
- **Overall Score: 89/100.** Half-up mean of five quality dimensions; suited to complex coding and visual-agent workloads.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Public vendor and independent evaluation research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Moonshot API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Moonshot announcement and evaluation details](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Vals evaluation and pricing](https://www.vals.ai/models/kimi_kimi-k3.1-pro)
  - [OpenRouter route](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
- Future sources: add a separate signed findings file alongside this one.
