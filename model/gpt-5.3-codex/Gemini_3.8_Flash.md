# Model Research Report: GPT-5.3 Codex

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 90/100

---

### Executive Summary

Released by OpenAI on February 5, 2026, GPT-5.3-Codex marks the consolidation of OpenAI's specialized software engineering models and general frontier reasoning into an agentic software development and cybersecurity model. Serving across the Codex CLI, IDE extensions, GitHub Copilot, and API, GPT-5.3-Codex features a 400,000-token input context window with a 128,000-token generation ceiling, powered by NVIDIA GB200 NVL72 server infrastructure with 25% faster inference speeds than GPT-5.2-Codex. Demonstrating industry-leading agentic software development metrics, the model scores 80.0% on SWE-bench Verified, 56.8% on SWE-bench Pro, and 77.3%–78.4% on Terminal-Bench 2.0. Notably, GPT-5.3-Codex was the first OpenAI model classified under the "High" capability tier for Cybersecurity within OpenAI's Preparedness Framework, prompting the deployment of a specialized layered safety stack and the "Trusted Access for Cyber" program. Standard API pricing is structured at $1.75 per million input tokens ($0.175 cached) and $14.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 93/100.** Tool orchestration and agent autonomy represent GPT-5.3-Codex's foremost strength. Achieving 77.3%–78.4% on Terminal-Bench 2.0 in native Codex harnesses, it executes multi-step terminal pipelines, orchestrates continuous build/test loops, provisions container environments, and navigates OS-level interactions (OSWorld-Verified) with minimal user steering.
- **Reasoning: 92/100.** Bridges deep mathematical and logical reasoning with system-level diagnostic deduction. The model excels at identifying subtle race conditions, distributed system failures, and multi-file dependency deadlocks.
- **Context window: 86/100.** Offers a 400,000-token input window and 128,000-token maximum output window. Incorporates "Perfect Recall" attention optimizations running on GB200 NVL72 systems, eliminating middle-context token degradation across large multi-module repositories.
- **Multimodal: 83/100.** Focuses on developer multimodality: interpreting UI wireframes, design mockups, architectural schematics, visual diffs, and desktop screenshots via OSWorld. Deliberately tailored for developer environments.
- **Coding: 96/100.** World-class software engineering and vulnerability remediation capabilities. Scoring 80.0% on SWE-bench Verified and 56.8% on SWE-bench Pro, GPT-5.3-Codex autonomously discovers bugs, generates regression test suites, and patches complex security flaws. Earned OpenAI's first "High" cybersecurity classification under the Preparedness Framework.
- **Cost efficiency: 76/100.** Premium frontier pricing at $1.75 in / $14.00 out per 1M tokens ($0.175 cached), tailored for high-leverage developer tooling.
- **Overall Score: 90/100.** (Arithmetic mean: `(93 + 92 + 86 + 83 + 96) / 5 = 450 / 5 = 90.0`, rounded to **90**).

---

### Key Strengths

1. **State-of-the-Art Software Engineering:** 80.0% SWE-bench Verified and 56.8% SWE-bench Pro lead enterprise agentic coding.
2. **Terminal-Native Agent Autonomy:** 77.3%–78.4% on Terminal-Bench 2.0 handles end-to-end command-line and environment workflows.
3. **Preparedness Framework High Cyber Tier:** Deep defensive capability in discovering and patching zero-day security vulnerabilities.
4. **GB200 Hardware Acceleration:** 25% faster inference and lower token expenditure than GPT-5.2-Codex.

---

### Trade-offs & Limitations

1. **Safety Access Verification:** High cybersecurity capabilities require verified developer/enterprise onboarding under the Trusted Access program.
2. **Developer-Centric Tuning:** Tuned heavily for coding, terminal ops, and engineering workflows rather than creative writing.
3. **400K Context Limit:** Trails 1M+ context window sizes found in Gemini and GLM families.

---

### Performance Benchmarks

- **SWE-bench Verified:** 80.0%
- **SWE-bench Pro:** 56.8%
- **Terminal-Bench 2.0:** 77.3% – 78.4% (Codex harness); ~64.7% (Terminus)
- **OSWorld-Verified:** Top-tier OS and desktop navigation
- **Cybersecurity Preparedness Level:** Classified "High" capability tier

---

### Sources & Verification

- [OpenAI GPT-5.3-Codex Announcement & Technical Details](https://openai.com)
- [OpenAI Preparedness Framework: Cybersecurity Evaluation](https://openai.com)
- [GitHub Blog: Next-Generation Codex in Copilot](https://github.blog)
- [Terminal-Bench 2.0 Benchmark Leaderboard](https://tbench.ai)
- [SWE-bench Leaderboard & SWE-bench Pro Evaluation](https://swebench.com)
